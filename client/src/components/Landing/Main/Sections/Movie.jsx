import React from "react";
import Movie01 from "../../../../assets/movies/movie_01.mp4";
import Movie02 from "../../../../assets/movies/movie_02.mp4";
import Movie03 from "../../../../assets/movies/movie_03.mp4";

const Movie = () => {
  return (
    <section className="movie">
      <div className="movie--container">
        <div
          className="movie--container--box movie--container--box--01"
          onClick={(e) =>
            e.target.classList.toggle("movie--container--box--active")
          }
        >
          <h3>HOW</h3>
          <video src={Movie01} muted loop autoPlay playsInline />
        </div>
        <div
          className="movie--container--box movie--container--box--02"
          onClick={(e) =>
            e.target.classList.toggle("movie--container--box--active")
          }
        >
          <h3>WHAT</h3>
          <video src={Movie02} muted loop autoPlay playsInline />
        </div>
        <div
          className="movie--container--box movie--container--box--03"
          onClick={(e) =>
            e.target.classList.toggle("movie--container--box--active")
          }
        >
          <h3>WHY</h3>
          <video src={Movie03} muted loop autoPlay playsInline />
        </div>
      </div>
    </section>
  );
};

export default Movie;
