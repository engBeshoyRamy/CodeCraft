import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                Code Your Future with
                                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Code Craft!</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Online coding classes for kids aged 7-16. Learn programming through interactive games, projects, and real-world skills from anywhere in Egypt!
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/booking"
                                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition"
                                >
                                    Start Coding 🤖
                                </Link>
                                <Link
                                    to="/programs"
                                    className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg border-2 border-gray-200 hover:border-primary transition"
                                >
                                    Explore Programs
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                                <div className="text-9xl">🤖</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16">Why Choose Code Craft?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '🎮', title: 'Learn Through Play', desc: 'Interactive coding games and projects that make learning fun and engaging.' },
                            { icon: '💻', title: '100% Online', desc: 'Learn from anywhere in Egypt with live interactive sessions.' },
                            { icon: '🏆', title: 'Real Projects', desc: 'Build actual apps, games, and websites while learning.' },
                            { icon: '👨‍🏫', title: 'Expert Instructors', desc: 'Passionate teachers with real tech industry experience.' },
                            { icon: '👥', title: 'Small Classes', desc: 'Personalized attention with max 8 students per class.' },
                            { icon: '🎓', title: 'Certificates', desc: 'Earn recognized certificates as you complete each level.' }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary to-secondary py-20">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Coding Journey?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Join hundreds of Egyptian kids already learning to code with Code Craft!
                    </p>
                    <Link
                        to="/booking"
                        className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition"
                    >
                        Book Your Free Trial Class
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;