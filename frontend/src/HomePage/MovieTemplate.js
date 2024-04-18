import rating_icon from '../images/rating-star-icon-png-8.jpg'

const MovieTemplate = ({movie,index}) => {
    return ( 
        <div className= "mx-5 ">
            <div className=" movie-description row justify-content-sm-around">
                <div className="col-2 justify-content-center d-flex align-items-center">
                    <img src={movie.movie_poster} style={{height: '150px'}} ></img>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <div>
                        <div className="container movie-title  fs-4">{index+1}. {movie.title}</div>
                            <ul className="list-group-horizontal d-flex" style={{paddingLeft: '1rem'}}>
                                <li className="d-inline-block me-2">{movie.year_of_release}</li>
                                <li className="d-inline-block me-2">{movie.duration}</li>
                                <li className="d-inline-block me-2">certification</li>
                            </ul>
                        <div className="container IMDB-rating">IMDB - <img src={rating_icon} style={{width:15,paddingBottom:4}}></img> {movie.IMDB_rating}</div>
                      </div>
                </div>
            </div>
        </div>
     );
}
 
export default MovieTemplate;