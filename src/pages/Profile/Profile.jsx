import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

function Profile() {
    const { user } = useContext(AuthContext);

  return (
      <div className="w-[50%] mx-auto p-5 my-20 bg-base-100 rounded-md shadow-lg text-center">
          <img className="rounded-full border-2 border-green-600 w-1/3 mx-auto " src={`${user.photoURL}`} />
          <h3 className="text-xl font-bold mb-3">User Name: {user.displayName}</h3>
          <p className="text-sm font-semibold">User Email: {user.email}</p>
          <div className='flex items-center mt-6 gap-x-3 mb-3'>
              
              <button className='flex items-center justify-center w-1/2 mx-auto px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 '>
                  <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5 rtl:rotate-180'
                  >
                      <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                      />
                  </svg>

                  <Link to="/">Go back</Link>
              </button>
          </div>
    </div>
  )
}

export default Profile
