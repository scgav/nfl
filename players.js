const PLAYERS = [
  {
    "id": 1,
    "rank": 1,
    "name": "Myles Garrett"
  },
  {
    "id": 2,
    "rank": 2,
    "name": "Josh Allen"
  },
  {
    "id": 3,
    "rank": 3,
    "name": "Bijan Robinson"
  },
  {
    "id": 4,
    "rank": 4,
    "name": "Matthew Stafford"
  },
  {
    "id": 5,
    "rank": 5,
    "name": "Jaxon Smith-Njigba"
  },
  {
    "id": 6,
    "rank": 6,
    "name": "Christian McCaffrey"
  },
  {
    "id": 7,
    "rank": 7,
    "name": "Puka Nacua"
  },
  {
    "id": 8,
    "rank": 8,
    "name": "Micah Parsons"
  },
  {
    "id": 9,
    "rank": 9,
    "name": "Jahmyr Gibbs"
  },
  {
    "id": 10,
    "rank": 10,
    "name": "Patrick Surtain II"
  },
  {
    "id": 11,
    "rank": 11,
    "name": "Drake Maye"
  },
  {
    "id": 12,
    "rank": 12,
    "name": "Will Anderson Jr."
  },
  {
    "id": 13,
    "rank": 13,
    "name": "Trey McBride"
  },
  {
    "id": 14,
    "rank": 14,
    "name": "Brian Burns"
  },
  {
    "id": 15,
    "rank": 15,
    "name": "Derrick Henry"
  },
  {
    "id": 16,
    "rank": 16,
    "name": "Ja'Marr Chase"
  },
  {
    "id": 17,
    "rank": 17,
    "name": "Jonathan Taylor"
  },
  {
    "id": 18,
    "rank": 18,
    "name": "Patrick Mahomes"
  },
  {
    "id": 19,
    "rank": 19,
    "name": "Justin Jefferson"
  },
  {
    "id": 20,
    "rank": 20,
    "name": "James Cook"
  },
  {
    "id": 21,
    "rank": 21,
    "name": "Sam Darnold"
  },
  {
    "id": 22,
    "rank": 22,
    "name": "Amon-Ra St. Brown"
  },
  {
    "id": 23,
    "rank": 23,
    "name": "Danielle Hunter"
  },
  {
    "id": 24,
    "rank": 24,
    "name": "Maxx Crosby"
  },
  {
    "id": 25,
    "rank": 25,
    "name": "Derek Stingley Jr."
  },
  {
    "id": 26,
    "rank": 26,
    "name": "De'Von Achane"
  },
  {
    "id": 27,
    "rank": 27,
    "name": "Devin Lloyd"
  },
  {
    "id": 28,
    "rank": 28,
    "name": "Christian Gonzalez"
  },
  {
    "id": 29,
    "rank": 29,
    "name": "Jalen Carter"
  },
  {
    "id": 30,
    "rank": 30,
    "name": "Aidan Hutchinson"
  },
  {
    "id": 31,
    "rank": 31,
    "name": "Dak Prescott"
  },
  {
    "id": 32,
    "rank": 32,
    "name": "Nik Bonitto"
  },
  {
    "id": 33,
    "rank": 33,
    "name": "Jared Goff"
  },
  {
    "id": 34,
    "rank": 34,
    "name": "Saquon Barkley"
  },
  {
    "id": 35,
    "rank": 35,
    "name": "Jared Verse"
  },
  {
    "id": 36,
    "rank": 36,
    "name": "George Pickens"
  },
  {
    "id": 37,
    "rank": 37,
    "name": "Penei Sewell"
  },
  {
    "id": 38,
    "rank": 38,
    "name": "Cooper DeJean"
  },
  {
    "id": 39,
    "rank": 39,
    "name": "Justin Herbert"
  },
  {
    "id": 40,
    "rank": 40,
    "name": "Trent Williams"
  },
  {
    "id": 41,
    "rank": 41,
    "name": "T. J. Watt"
  },
  {
    "id": 42,
    "rank": 42,
    "name": "Garett Bolles"
  },
  {
    "id": 43,
    "rank": 43,
    "name": "Chris Jones"
  },
  {
    "id": 44,
    "rank": 44,
    "name": "Joe Burrow"
  },
  {
    "id": 45,
    "rank": 45,
    "name": "Zack Baun"
  },
  {
    "id": 46,
    "rank": 46,
    "name": "George Kittle"
  },
  {
    "id": 47,
    "rank": 47,
    "name": "Quinyon Mitchell"
  },
  {
    "id": 48,
    "rank": 48,
    "name": "Josh Hines-Allen"
  },
  {
    "id": 49,
    "rank": 49,
    "name": "Joe Thuney"
  },
  {
    "id": 50,
    "rank": 50,
    "name": "Derwin James"
  },
  {
    "id": 51,
    "rank": 51,
    "name": "Caleb Williams"
  },
  {
    "id": 52,
    "rank": 52,
    "name": "Tristan Wirfs"
  },
  {
    "id": 53,
    "rank": 53,
    "name": "Davante Adams"
  },
  {
    "id": 54,
    "rank": 54,
    "name": "Fred Warner"
  },
  {
    "id": 55,
    "rank": 55,
    "name": "CeeDee Lamb"
  },
  {
    "id": 56,
    "rank": 56,
    "name": "Jalen Hurts"
  },
  {
    "id": 57,
    "rank": 57,
    "name": "Dion Dawkins"
  },
  {
    "id": 58,
    "rank": 58,
    "name": "Nico Collins"
  },
  {
    "id": 59,
    "rank": 59,
    "name": "Bo Nix"
  },
  {
    "id": 60,
    "rank": 60,
    "name": "Brock Bowers"
  },
  {
    "id": 61,
    "rank": 61,
    "name": "Kevin Byard"
  },
  {
    "id": 62,
    "rank": 62,
    "name": "Trevor Lawrence"
  },
  {
    "id": 63,
    "rank": 63,
    "name": "Kyle Hamilton"
  },
  {
    "id": 64,
    "rank": 64,
    "name": "Chris Olave"
  },
  {
    "id": 65,
    "rank": 65,
    "name": "Roquan Smith"
  },
  {
    "id": 66,
    "rank": 66,
    "name": "Drake London"
  },
  {
    "id": 67,
    "rank": 67,
    "name": "Jordyn Brooks"
  },
  {
    "id": 68,
    "rank": 68,
    "name": "Courtland Sutton"
  },
  {
    "id": 69,
    "rank": 69,
    "name": "Lamar Jackson"
  },
  {
    "id": 70,
    "rank": 70,
    "name": "Xavier McKinney"
  },
  {
    "id": 71,
    "rank": 71,
    "name": "Zay Flowers"
  },
  {
    "id": 72,
    "rank": 72,
    "name": "Jordan Love"
  },
  {
    "id": 73,
    "rank": 73,
    "name": "Zach Allen"
  },
  {
    "id": 74,
    "rank": 74,
    "name": "Josh Jacobs"
  },
  {
    "id": 75,
    "rank": 75,
    "name": "Budda Baker"
  },
  {
    "id": 76,
    "rank": 76,
    "name": "Jaycee Horn"
  },
  {
    "id": 77,
    "rank": 77,
    "name": "Baker Mayfield"
  },
  {
    "id": 78,
    "rank": 78,
    "name": "Josh Sweat"
  },
  {
    "id": 79,
    "rank": 79,
    "name": "Travis Kelce"
  },
  {
    "id": 80,
    "rank": 80,
    "name": "A. J. Brown"
  },
  {
    "id": 81,
    "rank": 81,
    "name": "Bobby Wagner"
  },
  {
    "id": 82,
    "rank": 82,
    "name": "Jalen Ramsey"
  },
  {
    "id": 83,
    "rank": 83,
    "name": "Jeffery Simmons"
  },
  {
    "id": 84,
    "rank": 84,
    "name": "Byron Young"
  },
  {
    "id": 85,
    "rank": 85,
    "name": "Brock Purdy"
  },
  {
    "id": 86,
    "rank": 86,
    "name": "Tuli Tuipulotu"
  },
  {
    "id": 87,
    "rank": 87,
    "name": "Tetairoa McMillan"
  },
  {
    "id": 88,
    "rank": 88,
    "name": "Jack Campbell"
  },
  {
    "id": 89,
    "rank": 89,
    "name": "Kyren Williams"
  },
  {
    "id": 90,
    "rank": 90,
    "name": "Derrick Brown"
  },
  {
    "id": 91,
    "rank": 91,
    "name": "Montez Sweat"
  },
  {
    "id": 92,
    "rank": 92,
    "name": "Azeez Al-Shaair"
  },
  {
    "id": 93,
    "rank": 93,
    "name": "Carson Schwesinger"
  },
  {
    "id": 94,
    "rank": 94,
    "name": "Creed Humphrey"
  },
  {
    "id": 95,
    "rank": 95,
    "name": "Demario Davis"
  },
  {
    "id": 96,
    "rank": 96,
    "name": "Travis Etienne"
  },
  {
    "id": 97,
    "rank": 97,
    "name": "Ernest Jones"
  },
  {
    "id": 98,
    "rank": 98,
    "name": "Bryce Young"
  },
  {
    "id": 99,
    "rank": 99,
    "name": "Quenton Nelson"
  },
  {
    "id": 100,
    "rank": 100,
    "name": "Cameron Jordan"
  }
];
