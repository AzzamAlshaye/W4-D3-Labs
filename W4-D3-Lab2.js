const characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];

// --------

const firstHeavyFirstName = characters
  .find((c) => c.mass > 75)
  .name.split(" ")[0];
console.log(firstHeavyFirstName);
// --------
const firstShortEyeColor = characters.find((c) => c.height < 180).eye_color;
console.log(firstShortEyeColor); // "blue"
// --------
const midHeightChars = characters.filter(
  (c) => c.height > 150 && c.height < 210
);
console.log(midHeightChars);
//--------
const allFemale = characters.filter((c) => c.gender === "female");
console.log(allFemale);
// --------
const eyeColors = characters.map((c) => c.eye_color);
console.log(`eye colors only array ${eyeColors}`);
// --------
const massOnly = characters.map((c) => c.mass);
console.log(`body mass only array ${massOnly}`);
// --------
const byNameAZ = characters.sort((a, b) => a.name.localeCompare(b.name));
console.log(byNameAZ.map((c) => c.name));
// --------
const byHeight = characters.sort((a, b) => a.height - b.height);
console.log(byHeight.map((c) => `${c.name} (${c.height})`));
// --------
const allTall = characters.every((c) => c.height > 100);
console.log(`Does every character have a height greater than 100? ${allTall}`);
// --------
const allLight = characters.every((c) => c.mass < 200);
console.log(`Is every character lighter than 200? ${allLight}`);

// --------
const anyBlackEyes = characters.some((c) => c.eye_color === "black");
console.log(`Is there at least one character with black eyes? ${anyBlackEyes}`); // true
// --------
const anyHeight177 = characters.some((c) => c.height === 177);
console.log(
  `Is there at least one character with a height of exactly 177? ${anyHeight177}`
);
