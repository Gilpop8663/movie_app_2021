import React from "react";
import "../components/Movie.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location , history } = this.props;
        if (location.state === undefined ){
            history.push("/");
        } 
    }
    render() {
        const {location} = this.props;
        if( location.state ){
            const {title , poster,year , genres ,summary} = location.state
            return (
                <div className="movie_detail">

                <div className="movie">

                <div className="movie_data">
                <img src={poster} alt={title} title={title}/>
                <h3 className="movie_title">{title}</h3>
                <h3 className="movie_year">{year}</h3>
                <ul className="movie_genres">
                    {genres.map((genres,index)=>(
                        <li key={index} className="genres_genre">{genres}</li>
                    ))}
                </ul>
                <h3 className="movie_summary">{summary}</h3>

            </div>
                </div>
                </div>
            )
        }else{
            return null;
        }
    }
}

export default Detail;