const movies = [
  {
    title: "The Matrix",
    director: "Wachowski Brothers",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.7,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
  },
  { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
];

// Get the title of the first movie released after the year 2000.
console.log(
  `the first movie released after the year 2000 : ${
    movies.find((m) => m.year > 2000).title
  }`
);

// Get the title of the first movie with a rating above 9.

console.log(
  `title of the first movie with a rating above 9 : ${
    movies.find((m) => m.rating > 9).title
  }`
);

// Get only the movies directed by “Christopher Nolan.”
console.log(
  `the movies directed by “Christopher Nolan" :`,
  movies.filter((m) => m.director === "Christopher Nolan")
);

// Get the movies that were released before 2010.
const pre2010 = movies.filter((m) => m.year < 2010);
console.log(` movies that were released before 2010:`, pre2010);

// Get an array containing only the movie titles.
const titles = movies.map((m) => m.title);
console.log("All movie titles:", titles);
// Get the average rating of all the movies.
const avgRating = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
console.log("Average rating:", avgRating);
// Sort the movies by year (oldest to newest).
const sortedByYear = movies.sort((a, b) => a.year - b.year);
console.log("Sorted by year (oldest→newest):", sortedByYear);
// Sort the movies by rating (highest to lowest).
const sortedByRating = movies.sort((a, b) => b.rating - a.rating);
console.log("Sorted by rating (highest→lowest):", sortedByRating);
// Are all the movies rated above 8?
const allAbove8 = movies.every((m) => m.rating > 8);
console.log("All movies rated above 8?", allAbove8);
// Is there at least one movie released in 1999?
const any1999 = movies.some((m) => m.year === 1999);
console.log("Any movie released in 1999?", any1999);

// Are all the movies directed by the same director?
const firstDirector = movies[0].director;
const allSameDirector = movies.every((m) => m.director === firstDirector);
console.log("All movies by the same director?", allSameDirector);
// Is there at least one movie rated below 8.5?
const anyBelow85 = movies.some((m) => m.rating < 8.5);
console.log("Any movie rated below 8.5?", anyBelow85);
