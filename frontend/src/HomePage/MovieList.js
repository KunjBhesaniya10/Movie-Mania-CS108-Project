import MovieTemplate from "./MovieTemplate";

const MovieList = ({MoviesData}) => {
    return ( 
        <>
        {
            MoviesData.map((movie,index)=>(
                <MovieTemplate movie={movie} key={movie.title} index={index}/>
            ))
        }
        </>
     );
}
 
export default MovieList;