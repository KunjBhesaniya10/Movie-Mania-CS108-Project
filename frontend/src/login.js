import './index.css'
import { useState } from 'react';
const Login = (props) => {
    
    const [usernameError, setusernameError] = useState('');
    function HandleSubmit(event) {
        event.preventDefault();
   console.log(props.UserName,props.Password)
   /* API INTEGRATION - sending username and password to backend for storing it.*/ 
}


    return (

        <div className="container mt-5 ">
            <div className="mt-5 row d-flex justify-content-center">
                <form className='mt-3 col-5 '>
                    <div class="form-floating mb-3">
                        <input required type="text" class="form-control" id="username" placeholder="Username"
                                onChange={(e)=>{props.setUserName(e.target.value)}} />
                        <label for="username">Username</label>
                    </div>
                    <label> {usernameError}</label>
                    <div class="form-floating">
                        <input required type="password" class="form-control" id="floatingPassword" placeholder="Password"
                                onChange={(e)=>{props.setPassword(e.target.value)}} />
                        <label for="floatingPassword">Password</label>

                    </div>
                    <button className="btn btn-primary mt-4" type="submit" onClick={(e)=>{HandleSubmit(e)}}>Login</button>
                </form>
            </div>

        </div>
    );
}

export default Login;