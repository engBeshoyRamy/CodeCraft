import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const Home = () => {
    const { language } = useLanguage();
    const t = translations;
    const [selectedFeature, setSelectedFeature] = useState(0);

    const whyChooseFeatures = [
        {
            icon: '🎓',
            titleEn: 'STEM & AI Curriculum',
            titleAr: 'منهاج متعدد من STEM والذكاء الاصطناعي',
            descEn: 'Students learn using the same tools and curriculum as professionals in the industry.',
            descAr: 'يتعلم الطلاب برمجة البرمجة باستخدام نفس المنصات التي يتعلم منها المختصرون'
        },
        {
            icon: '👥',
            titleEn: 'Sessions with a Personal Instructor',
            titleAr: 'تكون الجلسة للطالب ويست مسجلة',
            descEn: 'Each session is live and one-on-one with a specialist instructor.',
            descAr: 'مع مدرب شخصي'
        },
        {
            icon: '💼',
            titleEn: 'Best Computer Teachers',
            titleAr: 'أفضل مدرسين علوم الكمبيوتر',
            descEn: 'From top research institutions globally and have both studied and experienced in the field of computer science in English and Arabic.',
            descAr: 'من جميع أحسن الجامعات العالمية ولديهم خبرة حقيقية في صناعة التكنولوجيا'
        },
        {
            icon: '📊',
            titleEn: 'Professional Long-term Programming Career Path',
            titleAr: 'خطة مهنية طويلة الأمد للبرمجة',
            descEn: 'With a structured curriculum for child development.',
            descAr: 'مع منهاجية منظمة لتنمية طفلك'
        }
    ];

    const tools = [
        { icon: '📊', labelEn: 'UI/UX Design', labelAr: 'واجهة المستخدم (UX و UI)' },
        { icon: '💻', labelEn: 'Web Development', labelAr: 'تطوير الويب' },
        { icon: '🧩', labelEn: 'Minecraft', labelAr: 'Minecraft' },
        { icon: '🐍', labelEn: 'Python & Data', labelAr: 'بيثون والبيانات' },
        { icon: '🎮', labelEn: 'Game Development', labelAr: 'تطوير الألعاب' },
        { icon: '🤖', labelEn: 'AI Training', labelAr: 'برمجة تدريب الذكاء الاصطناعي' },
        { icon: '🔧', labelEn: 'AI Applications', labelAr: 'الذكاء الاصطناعي' },
        { icon: '📱', labelEn: 'Mobile Apps', labelAr: 'تطوير تطبيقات الموبايل' }
    ];

    const whyChooseImages = [
        {
            image: '👨‍🎓',
            titleEn: 'STEM & AI Curriculum',
            titleAr: 'منهاج متعدد من STEM والذكاء الاصطناعي'
        },
        {
            image: '📚',
            titleEn: 'Sessions with Instructor',
            titleAr: 'تكون الجلسة للطالب  مسجلة'
        },
        {
            image: '👨‍💼',
            titleEn: 'Best Teachers',
            titleAr: 'أفضل مدرسين علوم الكمبيوتر'
        },
        {
            image: '📈',
            titleEn: 'Career Path',
            titleAr: 'خطة مهنية طويلة الأمد للبرمجة'
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-20 animate-fade-in">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                {language === 'ar' ? 'اصنع مستقبلك مع ' : 'Code Your Future with '}
                                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    {language === 'ar' ? 'كود كرافت!' : 'Code Craft!'}
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                {language === 'ar'
                                    ? 'دروس برمجة أونلاين للأطفال من 6-18 سنة. تعلم البرمجة من خلال جلسات فردية تفاعلية مع مهارات حقيقية من أي مكان في مصر!'
                                    : 'Online coding classes for kids aged 6-18. Learn programming through interactive 1-on-1 sessions with real-world skills from anywhere in Egypt!'}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/booking"
                                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition"
                                >
                                    {language === 'ar' ? 'ابدأ البرمجة 🤖' : 'Start Coding 🤖'}
                                </Link>
                                <Link
                                    to="/programs"
                                    className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg border-2 border-gray-200 hover:border-primary transition"
                                >
                                    {language === 'ar' ? 'استكشف البرامج' : 'Explore Programs'}
                                </Link>
                            </div>
                        </div>
                        <div className="relative animate-slide-in-right">
                            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center animate-bounce">
                                <div className="text-9xl">🤖</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools & Skills Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        {language === 'ar' ? 'ما ستتعلمه' : 'What You Will Learn'}
                    </h2>
                    <p className="text-center text-gray-600 mb-16 text-lg">
                        {language === 'ar'
                            ? 'أكثر من 48 أداة تطوير برمجي و تكنولوجيا احترافية في منهج واحد'
                            : '48+ Professional Development Tools & Technologies in One Curriculum'}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {tools.map((tool, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl text-center hover:shadow-lg transform hover:scale-105 transition duration-300 animate-fade-in"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className="text-5xl mb-3">{tool.icon}</div>
                                <p className="font-semibold text-gray-800">
                                    {language === 'ar' ? tool.labelAr : tool.labelEn}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Code Craft Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        {language === 'ar' ? 'لماذا تختار كود كرافت؟' : 'Why Choose Code Craft?'}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <div className="relative animate-slide-in-left">
                            <div className="w-full h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl flex items-center justify-center">
                                <div className="text-9xl">{whyChooseImages[selectedFeature].image}</div>
                            </div>
                        </div>

                        {/* Right Features */}
                        <div className="space-y-4 animate-slide-in-right">
                            {whyChooseFeatures.map((feature, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedFeature(idx)}
                                    className={`w-full text-${language === 'ar' ? 'right' : 'left'} p-6 rounded-2xl transition transform hover:scale-105 ${
                                        selectedFeature === idx
                                            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                                            : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-primary'
                                    }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-3xl">{feature.icon}</span>
                                        <div>
                                            <h3 className="font-bold text-lg mb-2">
                                                {language === 'ar' ? feature.titleAr : feature.titleEn}
                                            </h3>
                                            {selectedFeature === idx && (
                                                <p className={selectedFeature === idx ? 'text-white/90' : 'text-gray-600'}>
                                                    {language === 'ar' ? feature.descAr : feature.descEn}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        {language === 'ar' ? 'مميزاتنا' : 'Our Features'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '🎮', titleEn: 'Learn Through Play', titleAr: 'التعلم من خلال اللعب', descEn: 'Interactive coding games and projects that make learning fun and engaging.', descAr: 'ألعاب برمجة تفاعلية ومشاريع تجعل التعلم ممتعًا وجذابًا.' },
                            { icon: '💻', titleEn: '100% Online', titleAr: '100٪ أونلاين', descEn: 'Learn from anywhere in Egypt with live interactive sessions.', descAr: 'تعلم من أي مكان في مصر مع جلسات مباشرة تفاعلية.' },
                            { icon: '🏆', titleEn: 'Real Projects', titleAr: 'مشاريع حقيقية', descEn: 'Build actual apps, games, and websites while learning.', descAr: 'ابنِ تطبيقات وألعاب ومواقع حقيقية أثناء التعلم.' },
                            { icon: '👨‍🏫', titleEn: 'Expert Instructors', titleAr: 'مدربون خبراء', descEn: 'Passionate teachers with real tech industry experience.', descAr: 'معلمون شغوفون بخبرة حقيقية في صناعة التكنولوجيا.' },
                            { icon: '👥', titleEn: '1-on-1 Sessions', titleAr: 'جلسات فردية', descEn: 'Personalized attention with private one-on-one sessions.', descAr: 'اهتمام شخصي مع جلسات خاصة فردية.' },
                            { icon: '🎓', titleEn: 'Certificates', titleAr: 'شهادات', descEn: 'Earn recognized certificates as you complete each level.', descAr: 'احصل على شهادات معترف بها عند إكمال كل مستوى.' }
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 animate-fade-in"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{language === 'ar' ? feature.titleAr : feature.titleEn}</h3>
                                <p className="text-gray-600">{language === 'ar' ? feature.descAr : feature.descEn}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary to-secondary py-20 animate-fade-in">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        {language === 'ar' ? 'مستعد لبدء رحلتك في البرمجة؟' : 'Ready to Start Your Coding Journey?'}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {language === 'ar'
                            ? 'انضم إلى المئات من الأطفال المصريين الذين يتعلمون البرمجة مع كود كرافت!'
                            : 'Join hundreds of Egyptian kids already learning to code with Code Craft!'}
                    </p>
                    <Link
                        to="/booking"
                        className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition"
                    >
                        {language === 'ar' ? 'احجز حصتك التجريبية المجانية' : 'Book Your Free Trial Class'}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;