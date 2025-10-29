import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
    const programs = [
        {
            title: 'Scratch Basics',
            age: '7-10 years',
            level: 'Beginner',
            description: 'Learn coding fundamentals through drag-and-drop programming. Create animations, games, and stories online!',
            icon: '🎨',
            topics: ['Block-based coding', 'Game design', 'Animation', 'Problem solving']
        },
        {
            title: 'Python for Kids',
            age: '10-13 years',
            level: 'Intermediate',
            description: 'Start with real programming language! Build games, apps, and learn text-based coding.',
            icon: '🐍',
            topics: ['Python basics', 'Variables & loops', 'Functions', 'Mini projects']
        },
        {
            title: 'Web Development',
            age: '12-16 years',
            level: 'Intermediate',
            description: 'Create real websites with HTML, CSS, and JavaScript. Learn how the internet works!',
            icon: '🌐',
            topics: ['HTML & CSS', 'JavaScript', 'Responsive design', 'Portfolio projects']
        },
        {
            title: 'App Development',
            age: '13-16 years',
            level: 'Advanced',
            description: 'Build mobile apps and advanced web applications. Learn modern frameworks!',
            icon: '📱',
            topics: ['React basics', 'Mobile apps', 'APIs', 'Full projects']
        },
        {
            title: 'Game Development',
            age: '11-16 years',
            level: 'All Levels',
            description: 'Design and code your own video games using Unity and other game engines!',
            icon: '🎮',
            topics: ['Unity basics', '2D/3D games', 'Game mechanics', 'Publishing']
        },
        {
            title: 'AI & Robotics',
            age: '12-16 years',
            level: 'Advanced',
            description: 'Explore artificial intelligence and programming. The future of tech!',
            icon: '🤖',
            topics: ['AI basics', 'Machine learning', 'Algorithms', 'Projects']
        }
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4">Our Online Programs</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From complete beginners to advanced coders, we have online programs designed for every skill level and age group.
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {programs.map((program, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
                            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
                                <div className="text-6xl mb-4">{program.icon}</div>
                                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                                <div className="flex justify-center gap-4 text-sm">
                                    <span className="bg-white px-3 py-1 rounded-full text-gray-700">{program.age}</span>
                                    <span className="bg-primary/20 px-3 py-1 rounded-full text-primary font-semibold">{program.level}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">{program.description}</p>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-sm text-gray-700">What You'll Learn:</h4>
                                    <ul className="space-y-1">
                                        {program.topics.map((topic, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-start">
                                                <span className="text-primary mr-2">✓</span>
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Not sure which program is right?</h2>
                    <p className="text-xl mb-8 opacity-90">Book a free consultation and we'll help you choose the perfect program!</p>
                    <Link
                        to="/booking"
                        className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition"
                    >
                        Book Free Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Programs;