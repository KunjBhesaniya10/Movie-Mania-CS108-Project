import './index.css'

const Login = () => {




    return (
        <div className="container mt-5 needs-validation ">
            <div className="mt-5 row d-flex justify-content-center">
                <form className='mt-3 col-5'>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Username"/>
                            <label for="floatingInput">Username</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                         
                    </div>
                    <button className="btn btn-primary mt-4" type="submit">Login</button>
                </form>
            </div>

        </div>
    );
}

export default Login;