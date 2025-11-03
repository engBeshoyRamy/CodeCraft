import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Pricing = () => {
    const { language } = useLanguage();

    const plans = [
        {
            name: language === 'ar' ? 'البداية' : 'Starter',
            description: language === 'ar' ? 'مثالي للمبتدئين' : 'Perfect for beginners',
            price: 4900,
            sessions: language === 'ar' ? 'جلسة واحدة أسبوعياً' : '1 session weekly',
            features: language === 'ar'
                ? ['جلسة واحدة في الأسبوع', 'ساعة واحدة لكل جلسة', 'جلسة فردية VIP', 'شهادة إتمام']
                : ['1 session weekly', '1 hour per session', 'VIP 1-on-1 session', 'Certificate of completion']
        },
        {
            name: language === 'ar' ? 'النمو' : 'Growth',
            description: language === 'ar' ? 'للطلاب المتقدمين' : 'For advancing students',
            price: 8500,
            sessions: language === 'ar' ? 'جلستين أسبوعياً' : '2 sessions weekly',
            popular: true,
            features: language === 'ar'
                ? ['جلستين في الأسبوع', 'ساعة واحدة لكل جلسة', 'جلسات فردية VIP', 'مشاريع عملية', 'دعم أولوي', 'شهادة وشارة']
                : ['2 sessions weekly', '1 hour per session', 'VIP 1-on-1 sessions', 'Project portfolio', 'Priority support', 'Certificate & badge']
        },
        {
            name: language === 'ar' ? 'احترافي' : 'Pro',
            description: language === 'ar' ? 'للمبرمجين الجادين' : 'Intensive learning',
            price: 13900,
            sessions: language === 'ar' ? 'ثلاث جلسات أسبوعياً' : '3 sessions weekly',
            features: language === 'ar'
                ? ['ثلاث جلسات في الأسبوع', 'ساعة واحدة لكل جلسة', 'جلسات VIP شخصية', 'مشاريع متقدمة', 'توجيه مهني', 'شهادة وتوصيات']
                : ['3 sessions weekly', '1 hour per session', 'VIP personalized attention', 'Advanced projects', 'Career guidance', 'Certificate & recommendations']
        }
    ];

    const faqs = [
        {
            question: language === 'ar' ? 'لماذا VIP فردي فقط؟' : 'Why VIP 1-on-1 only?',
            answer: language === 'ar'
                ? 'نؤمن بأن كل طفل يتعلم بشكل مختلف. الجلسات الفردية تضمن اهتماماً شخصياً وتقدماً أسرع.'
                : 'We believe every child learns differently. One-on-one sessions ensure personalized attention and faster progress.'
        },
        {
            question: language === 'ar' ? 'هل يمكنني تغيير الخطة؟' : 'Can I switch plans?',
            answer: language === 'ar'
                ? 'نعم! يمكنك الترقية أو التخفيض في أي وقت. تسري التغييرات في دورة الفوترة التالية.'
                : 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect in the next billing cycle.'
        },
        {
            question: language === 'ar' ? 'هل أحتاج لابتوب وكاميرا؟' : 'Do I need a laptop and camera?',
            answer: language === 'ar'
                ? 'نعم، كلاهما مطلوب للجلسات التفاعلية. هذا يضمن أفضل تجربة تعليمية.'
                : 'Yes, both are required for interactive sessions. This ensures the best learning experience.'
        },
        {
            question: language === 'ar' ? 'ما طرق الدفع المقبولة؟' : 'What payment methods do you accept?',
            answer: language === 'ar'
                ? 'نقبل فودافون كاش، التحويلات البنكية، وإنستاباي.'
                : 'We accept Vodafone Cash, bank transfers, and InstaPay.'
        }
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4">
                        {language === 'ar' ? 'أسعار بسيطة وشفافة' : 'Simple, Transparent Pricing'}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {language === 'ar'
                            ? 'جميع خططنا جلسات فردية VIP. ساعة واحدة أسبوعياً مع مدربك الشخصي!'
                            : 'All our plans are VIP 1-on-1 sessions. One hour per week with your personal instructor!'}
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`rounded-3xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl animate-fade-in ${
                                plan.popular ? 'ring-4 ring-primary transform scale-105 md:scale-110' : 'bg-white'
                            }`}
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            {/* Header */}
                            <div className={`bg-gradient-to-r ${plan.popular ? 'from-primary to-secondary' : 'from-gray-200 to-gray-300'} p-8 text-center`}>
                                {plan.popular && (
                                    <div className="bg-white text-primary text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                                        {language === 'ar' ? 'الأكثر شهرة' : 'MOST POPULAR'}
                                    </div>
                                )}
                                <h3 className={`text-3xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className={`p-8 text-center ${plan.popular ? 'bg-white' : 'bg-gray-50'}`}>
                                <div className={`text-5xl font-bold mb-2 ${plan.popular ? 'text-primary' : 'text-gray-900'}`}>
                                    {plan.price.toLocaleString()} EGP
                                </div>
                                <p className="text-gray-600 mb-6">
                                    {language === 'ar' ? 'شهرياً' : 'per month'}
                                </p>
                                <p className="text-lg font-semibold text-gray-800 mb-6">{plan.sessions}</p>
                                <Link
                                    to="/booking"
                                    state={{ plan: plan.name, price: plan.price }}
                                    className={`inline-block px-8 py-3 rounded-full font-bold text-lg transition transform hover:scale-105 w-full text-center ${
                                        plan.popular
                                            ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
                                            : 'bg-gray-300 text-gray-900 hover:bg-gray-400'
                                    }`}
                                >
                                    {language === 'ar' ? 'اختر الخطة' : 'Select Plan'}
                                </Link>
                            </div>

                            {/* Features */}
                            <div className={`p-8 ${plan.popular ? 'bg-gray-50' : 'bg-white'}`}>
                                <h4 className="font-bold text-lg mb-4">
                                    {language === 'ar' ? 'المميزات' : 'Features'}
                                </h4>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-gray-700">
                                            <span className={`${plan.popular ? 'text-primary' : 'text-gray-400'} mr-3 mt-1 text-xl`}>✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why VIP */}
                <div className="bg-white rounded-3xl p-12 shadow-lg mb-16 animate-fade-in">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {language === 'ar' ? 'لماذا الجلسات الفردية VIP؟' : 'Why VIP 1-on-1 Sessions?'}
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '👤',
                                titleEn: 'Personal Attention',
                                titleAr: 'اهتمام شخصي',
                                descEn: 'Each student gets customized learning plans based on their pace and style.',
                                descAr: 'كل طالب يحصل على خطة تعليمية مخصصة حسب سرعته وأسلوبه.'
                            },
                            {
                                icon: '⚡',
                                titleEn: 'Faster Progress',
                                titleAr: 'تقدم أسرع',
                                descEn: 'One-on-one interaction leads to better understanding and faster skill development.',
                                descAr: 'التفاعل الفردي يؤدي إلى فهم أفضل وتطور مهارات أسرع.'
                            },
                            {
                                icon: '🎯',
                                titleEn: 'Focused Learning',
                                titleAr: 'تعلم مركز',
                                descEn: 'No distractions - students stay engaged and motivated throughout the session.',
                                descAr: 'لا توجد تشتيتات - يبقى الطالب منخرطاً ومتحفزاً طوال الجلسة.'
                            },
                            {
                                icon: '🏆',
                                titleEn: 'Better Results',
                                titleAr: 'نتائج أفضل',
                                descEn: 'Students achieve more with personalized guidance from expert instructors.',
                                descAr: 'يحقق الطلاب نتائج أفضل مع التوجيه الشخصي من مدربين خبراء.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                                <div className="text-5xl mb-3">{item.icon}</div>
                                <h3 className="font-bold text-lg mb-2">
                                    {language === 'ar' ? item.titleAr : item.titleEn}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {language === 'ar' ? item.descAr : item.descEn}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="bg-white rounded-3xl p-12 shadow-lg mb-16 animate-fade-in">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition">
                                <h3 className="font-bold text-lg mb-3 text-gray-900">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white animate-fade-in">
                    <h2 className="text-3xl font-bold mb-4">
                        {language === 'ar' ? 'مستعد للبدء؟' : 'Ready to Get Started?'}
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        {language === 'ar'
                            ? 'اختر خطتك وابدأ التعلم اليوم!'
                            : 'Choose your plan and start learning today!'}
                    </p>
                    <Link
                        to="/booking"
                        className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition"
                    >
                        {language === 'ar' ? 'احجز جلستك الأولى' : 'Book Your First Session'}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;