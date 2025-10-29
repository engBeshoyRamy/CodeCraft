import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">CC</span>
                            </div>
                            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Code Craft
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-primary font-semibold transition">
                            Home
                        </Link>
                        <Link to="/programs" className="text-gray-700 hover:text-primary font-semibold transition">
                            Programs
                        </Link>
                        <Link to="/pricing" className="text-gray-700 hover:text-primary font-semibold transition">
                            Pricing
                        </Link>
                        <Link
                            to="/booking"
                            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/"
                            className="block px-3 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-md font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/programs"
                            className="block px-3 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-md font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            Programs
                        </Link>
                        <Link
                            to="/pricing"
                            className="block px-3 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-md font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/booking"
                            className="block px-3 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-md font-bold text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;