import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css"

function Movie ({id, year, title , summary, poster,genres }) {
    return (
        
        <div className="movie">
            <Link to={{
                pathname:`movie/${id}`,
                state:{
                    year,title,summary,poster,genres}
                }
            }>
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h3 className="movie_year">{year}</h3>
                <ul className="movie_genres">
                    {genres.map((genres,index)=>(
                        <li key={index} className="genres_genre">{genres}</li>
                    ))}
                </ul>
                <h3 className="movie_summary">{summary.slice(0,180)}...</h3>

            </div>
        </Link>
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