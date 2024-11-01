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
        <li><NavLink to="/craftItems"> All Art & craft Items</NavLink></li>
        <li><NavLink to="/addItems">Add Craft Item</NavLink></li>
        <li><NavLink to="/myCraftItems">My Art & Craft List</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
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
                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                  {user ?
                      <Link to="/login">
                          <button
                              onClick={handelSignOut}
                              className="btn btn-warning"
                          >SignOut</button> 
                      </Link> :
                      <Link to="/login">
                          <button className="btn btn-info">Login</button>
                      </Link>              
                  }
              </div>
          </div>
    </div>
  )
}

export default Header
