import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Programs = () => {
    const { language } = useLanguage();
    const [activeRank, setActiveRank] = useState('iron');

    const ranks = {
        iron: {
            name: language === 'ar' ? '⚙️ رتبة الحديد' : '⚙️ Iron Rank',
            age: language === 'ar' ? '6-9 سنوات' : '6-9 years',
            level: language === 'ar' ? 'مبتدئ' : 'Beginner',
            description: language === 'ar'
                ? 'بداية مثالية للمبرمجين الصغار! تعلم أساسيات الكمبيوتر وأنشئ مشاريع الذكاء الاصطناعي الأولى.'
                : 'Perfect start for young coders! Learn computer basics and create your first AI projects.',
            icon: '⚙️',
            topics: language === 'ar'
                ? ['أساسيات الكمبيوتر 💻', 'مقدمة في البرمجة', 'مشاريع ذكاء اصطناعي ممتعة', 'التفكير الإبداعي']
                : ['Computer Basics 💻', 'Introduction to Coding', 'Fun AI Projects', 'Creative Thinking'],
            color: 'from-orange-400 to-orange-500'
        },
        stone: {
            name: language === 'ar' ? '🪨 رتبة الحجر' : '🪨 Stone Rank',
            age: language === 'ar' ? '9-12 سنة' : '9-12 years',
            level: language === 'ar' ? 'متوسط' : 'Intermediate',
            description: language === 'ar'
                ? 'طوّر مهاراتك! صمم ألعاب وواجهات مستخدم جميلة.'
                : 'Level up your skills! Design games and beautiful user interfaces.',
            icon: '🪨',
            topics: language === 'ar'
                ? ['تطوير الألعاب ثنائية الأبعاد 🎮', 'تصميم واجهات المستخدم', 'أساسيات الرسوم المتحركة', 'حل المشكلات']
                : ['2D Game Development 🎮', 'UI/UX Design', 'Animation Basics', 'Problem Solving'],
            color: 'from-gray-400 to-gray-500'
        },
        gold: {
            name: language === 'ar' ? '🥇 رتبة الذهب' : '🥇 Gold Rank',
            age: language === 'ar' ? '12-15 سنة' : '12-15 years',
            level: language === 'ar' ? 'متقدم' : 'Advanced',
            description: language === 'ar'
                ? 'ابنِ تطبيقات حقيقية! أتقن تطوير الويب والموبايل مع بايثون.'
                : 'Build real apps! Master web and mobile development with Python.',
            icon: '🥇',
            topics: language === 'ar'
                ? ['تطوير المواقع 🌐', 'تطوير تطبيقات الموبايل 📱', 'برمجة بايثون 🐍', 'أساسيات قواعد البيانات']
                : ['Web Development 🌐', 'Mobile App Development 📱', 'Python Programming 🐍', 'Database Basics'],
            color: 'from-yellow-400 to-yellow-500'
        },
        diamond: {
            name: language === 'ar' ? '💎 رتبة الماس' : '💎 Diamond Rank',
            age: language === 'ar' ? '15-18 سنة' : '15-18 years',
            level: language === 'ar' ? 'خبير' : 'Expert',
            description: language === 'ar'
                ? 'كن خبيرًا تقنيًا! أتقن الذكاء الاصطناعي وعلم البيانات والأدوات الاحترافية.'
                : 'Become a tech expert! Master AI, data science, and professional tools.',
            icon: '💎',
            topics: language === 'ar'
                ? ['تطوير روبوتات المحادثة 🤖', 'علم البيانات 📊', 'قواعد بيانات SQL', 'تحليلات Power BI']
                : ['Chatbot Development 🤖', 'Data Science 📊', 'SQL Database', 'Power BI Analytics'],
            color: 'from-cyan-400 to-cyan-500'
        }
    };

    const currentRank = ranks[activeRank];

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4">
                        {language === 'ar' ? 'رتب التعلم لدينا' : 'Our Learning Ranks'}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {language === 'ar'
                            ? 'تقدم عبر 4 رتب من المبتدئ إلى المتقدم. كل رتبة برنامج كامل لمدة سنة!'
                            : 'Progress through 4 ranks from beginner to advanced. Each rank is a complete 1-year program!'}
                    </p>
                    <p className="text-lg text-gray-500 mt-4">
                        {language === 'ar'
                            ? 'ساعة واحدة أسبوعيًا • مباشر 1-1 • مطلوب لابتوب + كاميرا'
                            : '1 hour weekly • Live 1-on-1 • Laptop + Camera Required'}
                    </p>
                </div>

                {/* Ranks Tabs */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {Object.entries(ranks).map(([key, rank]) => (
                        <button
                            key={key}
                            onClick={() => setActiveRank(key)}
                            className={`px-6 py-3 rounded-full font-bold text-lg transition transform hover:scale-105 ${
                                activeRank === key
                                    ? `bg-gradient-to-r ${rank.color} text-white shadow-lg`
                                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary'
                            }`}
                        >
                            {rank.icon} {language === 'ar' ? rank.name.split(' ')[1] : rank.name.split(' ')[1]}
                        </button>
                    ))}
                </div>

                {/* Active Rank Details */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 animate-fade-in">
                    <div className={`bg-gradient-to-r ${currentRank.color} p-12 text-white`}>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <p className="text-lg opacity-90">{language === 'ar' ? 'العمر' : 'Age'}</p>
                                <p className="text-3xl font-bold">{currentRank.age}</p>
                            </div>
                            <div>
                                <p className="text-lg opacity-90">{language === 'ar' ? 'المستوى' : 'Level'}</p>
                                <p className="text-3xl font-bold">{currentRank.level}</p>
                            </div>
                            <div>
                                <p className="text-lg opacity-90">{language === 'ar' ? 'المدة' : 'Duration'}</p>
                                <p className="text-3xl font-bold">{language === 'ar' ? 'سنة واحدة' : '1 Year'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12">
                        <h2 className="text-3xl font-bold mb-6">{currentRank.name}</h2>
                        <p className="text-xl text-gray-600 mb-8">{currentRank.description}</p>

                        <h3 className="text-2xl font-bold mb-6">
                            {language === 'ar' ? 'ما ستتعلمه:' : 'What You Will Learn:'}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {currentRank.topics.map((topic, idx) => (
                                <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition">
                                    <span className="text-primary text-2xl mr-3">✓</span>
                                    <span className="text-lg font-semibold text-gray-800">{topic}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Ranks Preview */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {language === 'ar' ? 'جميع الرتب' : 'All Ranks Overview'}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(ranks).map(([key, rank]) => (
                            <button
                                key={key}
                                onClick={() => setActiveRank(key)}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer text-left animate-fade-in"
                            >
                                <div className={`bg-gradient-to-br ${rank.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition`}>
                                    {rank.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{rank.name}</h3>
                                <p className="text-sm text-gray-600 mb-3">{rank.age}</p>
                                <p className="text-sm text-gray-700">{rank.description}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white animate-fade-in">
                    <h2 className="text-3xl font-bold mb-4">
                        {language === 'ar' ? 'غير متأكد من أي رتبة تبدأ؟' : 'Not sure which rank to start?'}
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        {language === 'ar'
                            ? 'احجز استشارة مجانية وسنساعدك في اختيار الرتبة المثالية لطفلك!'
                            : 'Book a free consultation and we will help you choose the perfect rank for your child!'}
                    </p>
                    <Link
                        to="/booking"
                        className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition"
                    >
                        {language === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Programs;