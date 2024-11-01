import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

function Login() {
    const { signInUser } = useContext(AuthContext);

    const handelSignInUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, photo, password);

        // signIn user 
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })

    }
  return (
    <div>
          <div className="min-h-screen">
              <div className="">
                  <div className="text-center">
                      <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                  </div>
                  <div className="w-2/3 mx-auto border p-5 shadow-xl my-5">
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
