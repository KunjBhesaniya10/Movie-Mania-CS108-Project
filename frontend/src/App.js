import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Navbar from './HomePage/Navbar'
import Home from './Home.js'
import './HomePage/Homepage.css'
import Login from './login'
import { useState } from 'react'
function App() {

    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('')
  return(

    <>
     
      <BrowserRouter>
      <Navbar/>
   <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<Login UserName={UserName} Password={Password} setUserName={setUserName} setPassword={setPassword}/>}> </Route>
      </Routes>
      </BrowserRouter>

      </>
  )
}

export default App;
