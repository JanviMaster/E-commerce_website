import React from 'react';
// import Navbar from '../components/navbar';
// import { Link } from 'react-router-dom'; 
// import './page.css'
// import Card from '../components/Card';

const Dashboard = () => {
  return (
    <>
    <div className='app'>
      {/* <Card/> */}
      <div className="p-10 py-24">
        <div className="flex justify-between ">
          
          <div className="w-1/2 px-4 py-9 max-h-100">
            <h1 className="font-semibold text-6xl">
              Discover Your Next Favorite Blog Adventure 
            </h1>
          </div>

          <div className="w-1/2 text-left px-4"><br/>
            <p className="mb-4 mt-8">
              Join our vibrant community of storytellers and readers.
              Dive into a world of creativity, inspiration, and connection.
            </p>

            <div className="flex justify-start space-x-4">
              <button 
              className="px-2  bg-gradient-to-r from-purple-400 to-pink-500 text-white">
               Explore
              </button>
              <button 
              className=" px-2  text-sm font-medium text-white border-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-purple-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:via-purple-500 hover:to-purple-500 transition">
                Sign In
              </button>

            </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard
