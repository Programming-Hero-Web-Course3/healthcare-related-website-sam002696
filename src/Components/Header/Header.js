import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const { logOut, user } = useAuth();

    return (
        <div>
            <nav className=" bg-blue-700 flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-serif lg:flex-grow text-2xl">MEDI HUB</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow-0 lg:flex lg:items-center lg:w-auto">
                    <div className="font-serif lg:flex-grow text-2xl ">
                        <Link to='/home' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow">
                            Home
                        </Link>
                        <Link to='/doctor' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow">
                            Doctors
                        </Link>
                        <Link to='/service' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow">
                            Services
                        </Link>
                        <Link to='/blog' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow">
                            Blogs
                        </Link>
                        <Link to='/about' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:animate-bounce-slow mr-2">
                            About Us
                        </Link>
                        {user.email && <p className='block border-2 hover:animate-bounce-slow hover:bg-blue-300 hover:text-black lg:inline-block lg:mt-0 mr-2 mt-4 p-1 rounded text-teal-200 text-yellow-500 sm:w-52 lg:text-center sm:text-center'>{user.displayName}</p>}
                        {user.email ?

                            <Link to='/login' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2">
                                <button onClick={logOut} className='border-2 focus:ring-2 focus:ring-gray-400 hover:bg-blue-400 hover:text-black p-1 rounded'> Log Out</button> </Link>


                            :
                            <Link to='/login' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2">
                                <button className='border-2 focus:ring-2 focus:ring-gray-400 hover:bg-blue-400 hover:text-black p-1 rounded'>Login</button> </Link>

                        }

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;