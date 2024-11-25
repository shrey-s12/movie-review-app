import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md sticky top-0 right-0">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <NavLink to="/" className="hover:text-blue-200">
                        Movie Review
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <div className="space-x-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-md transition duration-300 ${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/review"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-md transition duration-300 ${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}`
                        }
                    >
                        Review
                    </NavLink>
                    <NavLink
                        to="/view"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-md transition duration-300 ${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}`
                        }
                    >
                        View
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
