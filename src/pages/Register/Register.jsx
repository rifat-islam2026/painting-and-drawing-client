import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

function Register() {
    const { createUser } = useContext(AuthContext);

    const handelRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name, email, photo, password);

        // create user 
        createUser(email, password)
            .then(result => {
            console.log(result.user)
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL:photo
                })
                    .then(() => { console.log('profile updated') })
                .catch()
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
                      <h1 className="text-5xl font-bold mb-5">Please Register now!</h1>
                  </div>
                  <div className="w-2/3 mx-auto border p-5 shadow-xl my-5">
                      <form onSubmit={handelRegister}>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Name</span>
                              </label>
                              <input
                                  name="name"
                                  type="text"
                                  placeholder="Name"
                                  className="input input-bordered"
                                  required />
                          </div>
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
                                  <span className="label-text">Photo</span>
                              </label>
                              <input
                                  name="photo"
                                  type="text"
                                  placeholder="Photo URL"
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
                              <button className="btn btn-primary">Register</button>
                          </div>
                          <p className="font-semibold pt-3">Already have account? 
                              <Link
                                  to="/login"
                                  className='text-blue-600'
                              > Please login</Link>
                          </p>
                      </form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Register
