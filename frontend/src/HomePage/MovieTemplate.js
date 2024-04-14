import img from '../MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
const MovieTemplate = () => {
    return ( 
        <div className= "mx-5">
            <div className=" movie-description row justify-content-sm-around">
                <div className="col-2 justify-content-center d-flex align-items-center">
                    <img src={img} style={{height: '150px'}} ></img>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <div>
                        <div className="container movie-title  fs-4">Movie-title</div>
                            <ul className="list-group-horizontal d-flex" style={{paddingLeft: '1rem'}}>
                                <li className="d-inline-block me-2">year of release</li>
                                <li className="d-inline-block me-2">duration</li>
                                <li className="d-inline-block me-2">certification</li>
                            </ul>
                        <div className="container IMDB-rating">IMDB: 9.0</div>
                      </div>
                </div>
            </div>
        </div>
     );
}
 
export default MovieTemplate;