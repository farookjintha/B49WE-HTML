class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;

    console.log("this.title: ", this.title);
    console.log("this.studio: ", this.studio);
    console.log("this.rating: ", this.rating);
  }

  getPG(movies) {
    const filteredMovies = movies.filter((movie) => {
      return movie.rating === "PG";
    });
    return filteredMovies;
  }
}

let movies = [
  {
    title: "ABC1",
    studio: "ABC1",
    rating: "PG",
  },
  {
    title: "ABC2",
    studio: "ABC2",
    rating: "PG13",
  },
  {
    title: "ABC3",
    studio: "ABC3",
    rating: "PG",
  },
  {
    title: "ABC4",
    studio: "ABC4",
    rating: "PG13",
  },
];

const movieObj = new Movie("Casino Royale", "Eon Productions", "PG13");

const sampleObj = new Movie("Hoppenheimer", "Marvel");

const result = sampleObj.getPG(movies);

console.log("Result: ", result);
