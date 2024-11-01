import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

function Login() {
    const { signInUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();

    const handelSignInUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, photo, password);

        // reset error
        setLoginError('');

        // signIn user 
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully.",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            })

    }
  return (
    <div>
          <div className="min-h-screen">
              <div className="">
                  <div className="text-center">
                      <h1 className="text-5xl font-bold my-5">Login now!</h1>
                  </div>
                  <div className="w-2/3 mx-auto border p-5 shadow-xl my-5">
                      {loginError &&
                          <p className='my-5 p-2 bg-red-200 '>{loginError}</p>
                      }
                      <form onSubmit={handelSignInUser}>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Email</span>
                              </label>
                              <input
                                  name="email"
                                  type="email"
                                  placeholder="Email"
                                  className="input input-bordered"
                                  required />
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Password</span>
                              </label>
                              <input
                                  name="password"
                                  type="password"
                                  placeholder="password"
                                  className="input input-bordered"
                                  required />
                              <label className="label">
                                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                              </label>
                          </div>
                          <div className="form-control mt-6">
                              <button className="btn btn-primary">Login</button>
                          </div>
                          <p className="font-semibold pt-3">Do not have an account?
                              <Link
                                  to="/register"
                                  className='text-blue-600'
                              > Please Register</Link>
                          </p>
                      </form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Login
