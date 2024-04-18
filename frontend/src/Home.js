import MovieList from "./HomePage/MovieList";

const Home = ({MoviesData}) => {
    return ( 
        <>
         <div className="container mt-5">

                <MovieList MoviesData={MoviesData}/>
            
         </div>
        </>
     );
}
 
export default Home;