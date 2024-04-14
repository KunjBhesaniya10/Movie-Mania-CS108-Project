import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Navbar from './HomePage/Navbar'
import Home from './Home.js'
import './HomePage/Homepage.css'
import Login from './login'
function App() {

  return(

    <>
     
      <BrowserRouter>
      <Navbar/>
   <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>}> </Route>
      </Routes>
      </BrowserRouter>

      </>
  )
}

export default App;
