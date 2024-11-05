import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

function Header() {
    const { logOut ,user} = useContext(AuthContext);

    const handelSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myAllCraftItems"> All Art & craft Items</NavLink></li>
        <li><NavLink to="/addItems">Add Craft Item</NavLink></li>
        <li><NavLink to="/myCraftItems">My Art & Craft List</NavLink></li>
    </>

  return (
    <div>
          <div className="navbar bg-base-200">
              <div className="navbar-start">
                  <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16" />
                          </svg>
                      </div>
                      <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
                         {links}
                      </ul>
                  </div>
                  <Link to="/" className="font-bold text-2xl">Painting And Drawing</Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                      {links}
                  </ul>
              </div>
              <div className="navbar-end">
                  {!user && 
                      <Link to="/login">
                          <button className="btn btn-info">Login</button>
                      </Link>              
                  }
                  {
                      user && 
                      <div className="dropdown dropdown-end z-50">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                              <div className="w-10 rounded-full">
                                  <img
                                      alt="User Profile "
                                          src={`${user.photoURL}`} />
                              </div>
                          </div>
                          <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                              <li>
                                  <Link to="/profile" className="justify-between">
                                      Profile
                                  </Link>
                              </li>
                                  <li className='mt-2' onClick={handelSignOut}>
                                      <button className='bg-gray-200 block text-center hover:bg-warning'>Logout</button>
                                  </li>
                          </ul>
                      </div>
                  }                
           </div>
          </div>
    </div>
  )
}

export default Header
