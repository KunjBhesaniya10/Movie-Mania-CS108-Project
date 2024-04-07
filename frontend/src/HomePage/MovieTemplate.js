const MovieTemplate = () => {
    return ( 
        <div className= "mx-5">
            <div className=" movie-description row justify-content-sm-around">
                <div className="col-2">
                    <img src="./logo192.png" style={{height: '100px'}}></img>
                </div>
                <div className="col bg-warning me-3">
                        <div className="container movie-title">Movie-title</div>
                        <div className="row">
                            <ul>
                                <li>year of release</li>
                                <li>duration</li>
                                <li>certification</li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default MovieTemplate;