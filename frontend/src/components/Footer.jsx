import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                                <span className="text-xl font-bold">CC</span>
                            </div>
                            <span className="ml-2 text-lg font-bold">Code Craft</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Empowering kids to become tomorrow's tech leaders through fun and interactive online coding education.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-accent transition">Home</Link>
                            </li>
                            <li>
                                <Link to="/programs" className="text-gray-400 hover:text-accent transition">Programs</Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-gray-400 hover:text-accent transition">Pricing</Link>
                            </li>
                            <li>
                                <Link to="/booking" className="text-gray-400 hover:text-accent transition">Book Now</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>📧 codecraft698@gmail.com</li>
                            <li>📱 01055001724</li>
                            <li>📍 Online Courses - Cairo, Egypt</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                                <span>f</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                                <span>𝕏</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                                <span>in</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; 2025 Code Craft. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;