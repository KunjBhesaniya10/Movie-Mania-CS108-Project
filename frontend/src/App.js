import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Navbar from './HomePage/Navbar'
import Home from './Home.js'
import './HomePage/Homepage.css'
import Login from './login'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {

    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [MoviesData, setMoviesData] = useState([]);
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/moviesData/')
      .then(response => {
        setMoviesData(response.data)
        })
    },[])
   




  return(

    <>
     
      <BrowserRouter>
      <Navbar/>
   <Routes>
        <Route path='/' element={<Home MoviesData={MoviesData}/>} ></Route>
        <Route path='/login' element={<Login UserName={UserName} Password={Password} setUserName={setUserName} setPassword={setPassword}/>}> </Route>
      </Routes>
      </BrowserRouter>

      </>
  )
}

export default App;
