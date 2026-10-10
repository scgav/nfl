
const TOTAL=PLAYERS.length,grid=document.getElementById("grid");
const selections=new Map();let submitted=false,activeView="unguessed",cards=[];
const el=id=>document.getElementById(id);
const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
const sortLast=(a,b)=>a.name.split(" ").at(-1).localeCompare(b.name.split(" ").at(-1))||a.name.localeCompare(b.name);
const board=[...PLAYERS];
for(let i=board.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[board[i],board[j]]=[board[j],board[i]];}

// ESPN publishes NFL player portraits through its athlete roster data.
// Team IDs are stable ESPN NFL team identifiers; image URLs are extracted from roster objects.
const TEAMS=["ari","atl","bal","buf","car","chi","cin","cle","dal","den","det","gb","hou","ind","jax","kc","lv","lac","lar","mia","min","ne","no","nyg","nyj","phi","pit","sf","sea","tb","ten","wsh"];
const ALIASES={
 "t j watt":"t j watt","tj watt":"t j watt",
 "a j brown":"a j brown","aj brown":"a j brown",
 "patrick surtain ii":"patrick surtain ii","patrick surtain":"patrick surtain ii",
 "will anderson jr":"will anderson jr","will anderson":"will anderson jr",
 "derek stingley jr":"derek stingley jr","derek stingley":"derek stingley jr",
 "josh hines allen":"josh hines allen","josh allen jaguars":"josh hines allen",
 "travis etienne jr":"travis etienne","travis etienne":"travis etienne",
 "ernest jones iv":"ernest jones","ernest jones":"ernest jones",
 "jeffery simmons":"jeffery simmons","jeffery simmons jr":"jeffery simmons"
};
const canonical=s=>ALIASES[norm(s)]||norm(s);
async function imagesFromRosters(){
 const map=new Map();
 const results=await Promise.all(TEAMS.map(async t=>{
  try{
   const r=await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${t}/roster`);
   if(!r.ok)return [];
   const data=await r.json();
   return (data.athletes||[]).flatMap(group=>Array.isArray(group.items)?group.items:[group]);
  }catch(e){console.warn("Roster unavailable",t,e);return []}
 }));
 for(const a of results.flat()){
  const name=a.displayName||a.fullName||a.name;
  const url=a.headshot?.href||(a.id?`https://a.espncdn.com/i/headshots/nfl/players/full/${a.id}.png`:null);
  if(name&&url)map.set(canonical(name),url);
 }
 return map;
}
function usedElsewhere(id){return new Set([...selections].filter(([k])=>k!==id).map(([,v])=>v))}
function update(){
 const used=new Set(selections.values()),remaining=PLAYERS.filter(p=>!used.has(p.name)).sort(sortLast);
 el("count").textContent=selections.size;el("barFill").style.width=(selections.size/TOTAL*100)+"%";
 el("remainingCount").textContent=remaining.length;el("unguessedCount").textContent=TOTAL-selections.size;el("guessedCount").textContent=selections.size;
 el("remainingNames").replaceChildren(...remaining.map(p=>{const d=document.createElement("div");d.className="remainingName";d.textContent=p.name;return d}));
 if(!remaining.length)el("remainingNames").textContent="Every name has been assigned.";
 cards.forEach(({card,player})=>card.classList.toggle("viewHidden",activeView==="guessed"?!selections.has(player.id):selections.has(player.id)));
 for(const v of ["unguessed","guessed"]){el(v+"Tab").classList.toggle("active",v===activeView);el(v+"Tab").setAttribute("aria-selected",String(v===activeView))}
}
function choose(card,input,menu,player,name){
 selections.set(player.id,name);input.value=name;input.dataset.selected=name;card.classList.add("matched");menu.classList.remove("open");update();
}
function clear(card,input,menu,player){
 selections.delete(player.id);input.value="";input.dataset.selected="";card.classList.remove("matched");menu.classList.remove("open");update();
}
function menuFor(card,input,menu,player){
 if(submitted)return;
 const used=usedElsewhere(player.id),parts=norm(input.value).split(" ").filter(Boolean);
 const options=PLAYERS.filter(p=>!used.has(p.name)&&parts.every(s=>norm(p.name).includes(s))).sort(sortLast).slice(0,12);
 menu.replaceChildren();
 if(!options.length){const d=document.createElement("div");d.className="empty";d.textContent="No available names match.";menu.appendChild(d)}
 for(const p of options){
  const d=document.createElement("div");d.className="option";d.textContent=p.name;d.setAttribute("role","option");
  d.addEventListener("mousedown",e=>{e.preventDefault();choose(card,input,menu,player,p.name)});
  menu.appendChild(d);
 }
 menu.classList.add("open");
}
function makeCard(player,index,images){
 const card=document.createElement("article");card.className="card";
 card.innerHTML=`<div class="photoWrap"><div class="rank">FACE ${index+1}</div><img hidden alt="NFL player headshot"></div><div class="answer"><input autocomplete="off" spellcheck="false" aria-label="Name this NFL player" placeholder="Type a player name…"><button type="button" class="clear" aria-label="Clear answer">×</button><div class="menu" role="listbox"></div></div><div class="feedback"></div>`;
 const img=card.querySelector("img"),input=card.querySelector("input"),menu=card.querySelector(".menu");
 const url=images.get(canonical(player.name));
 if(url){img.onload=()=>img.hidden=false;img.onerror=()=>img.hidden=true;img.src=url}
 input.addEventListener("focus",()=>menuFor(card,input,menu,player));
 input.addEventListener("input",()=>{if(input.dataset.selected&&input.value!==input.dataset.selected){selections.delete(player.id);input.dataset.selected="";card.classList.remove("matched");update()}menuFor(card,input,menu,player)});
 input.addEventListener("keydown",e=>{
  const opts=[...menu.querySelectorAll(".option")];let i=opts.findIndex(o=>o.classList.contains("active"));
  if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();i=Math.max(0,Math.min(opts.length-1,i+(e.key==="ArrowDown"?1:-1)));opts.forEach(o=>o.classList.remove("active"));opts[i]?.classList.add("active");opts[i]?.scrollIntoView({block:"nearest"})}
  if(e.key==="Enter"&&opts.length){e.preventDefault();choose(card,input,menu,player,opts[Math.max(i,0)].textContent)}
  if(e.key==="Escape")menu.classList.remove("open");
 });
 input.addEventListener("blur",()=>setTimeout(()=>menu.classList.remove("open"),100));
 card.querySelector(".clear").addEventListener("click",()=>clear(card,input,menu,player));
 grid.appendChild(card);cards.push({card,input,player});
}
async function init(){
 const images=await imagesFromRosters();
 board.forEach((p,i)=>makeCard(p,i,images));update();
 const missing=PLAYERS.filter(p=>!images.has(canonical(p.name))).length;
 el("imageNotice").textContent=missing?`NFL headshots: ${missing} of ${TOTAL} players could not be matched to the ESPN roster directory.`:"2026 NFL Top 100 • Player headshots from ESPN.";
}
init();
for(const v of ["unguessed","guessed"])el(v+"Tab").addEventListener("click",()=>{activeView=v;update()});
el("submitBtn").addEventListener("click",()=>{
 const missing=TOTAL-selections.size;
 if(missing&&!confirm(`You still have ${missing} unmatched players. Submit anyway?`))return;
 submitted=true;let score=0;
 cards.forEach(({card,input,player})=>{
  const guess=selections.get(player.id)||"",correct=guess===player.name;if(correct)score++;
  card.classList.add(correct?"correct":"wrong");
  card.querySelector(".feedback").textContent=correct?"✓ Correct":`✕ ${guess||"No answer"} → ${player.name}`;
  input.disabled=true;card.querySelector(".clear").style.display="none";
 });
 activeView=selections.size?"guessed":"unguessed";update();
 el("score").textContent=score;
 el("scoreLine").textContent=score>=90?"Elite NFL face recognition.":score>=75?"You know the league extremely well.":score>=50?"Solid — the deeper cuts got you.":"The NFL Top 100 won this round.";
 el("results").showModal();
});
el("reviewBtn").addEventListener("click",()=>el("results").close());
el("playAgainBtn").addEventListener("click",()=>location.reload());
el("resetBtn").addEventListener("click",()=>{if(confirm("Clear every answer and reshuffle the board?"))location.reload()});
el("remainingToggle").addEventListener("click",()=>{
 const panel=document.querySelector(".remainingPanel"),open=panel.classList.toggle("open");
 el("remainingToggle").setAttribute("aria-expanded",String(open));
 el("remainingToggle").textContent=open?"Hide remaining names":"Show remaining names";
});
