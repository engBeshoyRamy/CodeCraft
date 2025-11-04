import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
    const { language } = useLanguage();

    const socialLinks = [
        {
            name: 'Facebook',
            icon: (
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            ),
            url: 'https://www.facebook.com/profile.php?id=61579035135022',
            color: 'hover:text-blue-600',
            bgColor: 'hover:bg-blue-100'
        },
        {
            name: 'Instagram',
            icon: (
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 12.912c0 3.04-2.469 5.506-5.506 5.506s-5.506-2.469-5.506-5.506 2.469-5.506 5.506-5.506 5.506 2.469 5.506 5.506zm1.331-5.506c0 .717-.582 1.299-1.299 1.299-.717 0-1.299-.582-1.299-1.299 0-.717.582-1.299 1.299-1.299.717 0 1.299.582 1.299 1.299zm1.614-1.65c0 1.487-1.206 2.693-2.693 2.693s-2.693-1.206-2.693-2.693 1.206-2.693 2.693-2.693 2.693 1.206 2.693 2.693z"/>
                </svg>
            ),
            url: 'https://www.instagram.com/code_craft333/',
            color: 'hover:text-pink-600',
            bgColor: 'hover:bg-pink-100'
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
            ),
            url: 'https://www.linkedin.com/company/code-craft12/?viewAsMember=true',
            color: 'hover:text-blue-700',
            bgColor: 'hover:bg-blue-100'
        }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="animate-fade-in">
                        <Link to="/" className="flex items-center mb-4 group">
                            <img src="/logo.png" alt="Code Craft" className="h-10 w-10 rounded-lg group-hover:scale-110 transition transform" />
                            <span className="ml-2 text-xl font-bold group-hover:text-primary transition">Code Craft</span>
                        </Link>
                        <p className="text-gray-400 text-sm">
                            {language === 'ar'
                                ? 'تمكين الأطفال ليصبحوا قادة التكنولوجيا في المستقبل من خلال تعليم برمجة أونلاين ممتع وتفاعلي.'
                                : 'Empowering kids to become tomorrow\'s tech leaders through fun and interactive online coding education.'}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <h3 className="font-bold text-lg mb-4">
                            {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-primary transition transform hover:translate-x-1 inline-block">
                                    {language === 'ar' ? 'الرئيسية' : 'Home'}
                                </Link>
                            </li>
                            <li>
                                <Link to="/programs" className="text-gray-400 hover:text-primary transition transform hover:translate-x-1 inline-block">
                                    {language === 'ar' ? 'البرامج' : 'Programs'}
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-gray-400 hover:text-primary transition transform hover:translate-x-1 inline-block">
                                    {language === 'ar' ? 'الأسعار' : 'Pricing'}
                                </Link>
                            </li>
                            <li>
                                <Link to="/booking" className="text-gray-400 hover:text-primary transition transform hover:translate-x-1 inline-block">
                                    {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h3 className="font-bold text-lg mb-4">
                            {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                        </h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-primary transition">📧 codecraft698@gmail.com </li>
                            <li className="hover:text-primary transition">📱 +201055001724 </li>
                            <li className="hover:text-primary transition">📍 {language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <h3 className="font-bold text-lg mb-4">
                            {language === 'ar' ? 'تابعنا' : 'Follow Us'}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.name}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition transform hover:scale-110 hover:-translate-y-1 ${social.bgColor} bg-gray-700 animate-fade-in`}
                                    style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                                >
                                    <span className={`transition ${social.color}`}>{social.icon}</span>
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-500 text-xs mt-4">
                            {language === 'ar' ? 'تابعنا على وسائل التواصل' : 'Follow us on social media'}
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            {language === 'ar'
                                ? '© 2025 كود كرافت. جميع الحقوق محفوظة.'
                                : '© 2025 Code Craft. All rights reserved.'}
                        </p>
                        <p className="text-gray-500 text-xs mt-4 md:mt-0">
                            {language === 'ar'
                                ? 'صُنع بـ ❤️ من أجل الأطفال'
                                : 'Made with ❤️ for Kids'}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;