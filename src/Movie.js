import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie ({id, year, title , summary, poster,genres }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title}/>
            <div class="movie_data">
                <h3 class="movie_title">{title}</h3>
                <h3 class="movie_year">{year}</h3>
                <ul class="movie_genres">
                    {genres.map((genres,index)=>(
                        <li key={index} className="genres_genre">{genres}</li>
                    ))}
                </ul>
                <h3 class="movie_summary">{summary.slice(0,140)}...</h3>

            </div>
        </div>
    )

}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster :PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;