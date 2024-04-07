import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Navbar from './HomePage/Navbar'
import Home from './Home.js'
import './HomePage/Homepage.css'
function App() {

  return(

    <>
     
      <BrowserRouter>
      <Navbar/>
   <Routes>
        <Route path='/' element={<Home/>} ></Route>
      </Routes>
      </BrowserRouter>

      </>
  )
}

export default App;
