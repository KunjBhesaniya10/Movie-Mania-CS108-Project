import {Link} from 'react-router-dom'
import './Homepage.css'
const Navbar = () => {
  
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-section">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Movie Mania</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/'} className="nav-link active text-white">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to={'/'} >Recommender</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to={'/'}>WatchList</Link>
        </li>

        <Link className="nav-link text-white" to={'/login'}>Login/Register</Link>

      </ul>
    </div>
  </div>
</nav>
        </>
     );
}
 
export default Navbar;