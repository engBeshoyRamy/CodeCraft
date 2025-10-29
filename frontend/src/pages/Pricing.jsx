import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for beginners exploring coding',
            groupPrice: 3900,
            vipPrice: 4900,
            features: [
                '4 online sessions per month',
                '1 session weekly',
                'Group class (max 8 students)',
                'Certificate of completion',
                'Parent progress reports'
            ]
        },
        {
            name: 'Growth',
            description: 'For students ready to advance their skills',
            groupPrice: 6900,
            vipPrice: 8500,
            popular: true,
            features: [
                '8 online sessions per month',
                '2 sessions weekly',
                'Group or VIP option',
                'Project portfolio',
                'Certificate & badge',
                'Priority support'
            ]
        },
        {
            name: 'Pro',
            description: 'Intensive learning for serious coders',
            groupPrice: 11900,
            vipPrice: 13900,
            features: [
                '12 online sessions per month',
                '3 sessions weekly',
                'VIP personalized attention',
                'Advanced projects',
                'Competition prep',
                'Career guidance',
                'Certificate & recommendations'
            ]
        }
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose between Group classes or VIP one-on-one online sessions. All plans include 1 session weekly minimum.
                    </p>
                </div>

                {/* Pricing Table */}
                <div className="mb-12 overflow-x-auto">
                    <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                                <th className="px-6 py-6 text-left text-lg font-bold">Plan</th>
                                <th className="px-6 py-6 text-center text-lg font-bold">Group Class<br /><span className="text-sm font-normal opacity-90">(Max 8 students)</span></th>
                                <th className="px-6 py-6 text-center text-lg font-bold">VIP 1-on-1<br /><span className="text-sm font-normal opacity-90">(Private sessions)</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {plans.map((plan, idx) => (
                                <tr key={idx} className={`border-b border-gray-200 ${plan.popular ? 'bg-accent/10' : ''}`}>
                                    <td className="px-6 py-8">
                                        <div className="flex items-center">
                                            {plan.popular && (
                                                <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded mr-3">POPULAR</span>
                                            )}
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                                                <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                                                <p className="text-xs text-gray-500 mt-2">📅 1 session weekly</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-8 text-center">
                                        <div className="text-3xl font-bold text-primary mb-2">
                                            {plan.groupPrice.toLocaleString()} EGP
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">per month</p>
                                        <Link
                                            to="/booking"
                                            state={{ plan: plan.name, type: 'Group', price: plan.groupPrice }}
                                            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition"
                                        >
                                            Select Group
                                        </Link>
                                    </td>
                                    <td className="px-6 py-8 text-center">
                                        <div className="text-3xl font-bold text-secondary mb-2">
                                            {plan.vipPrice.toLocaleString()} EGP
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">per month</p>
                                        <Link
                                            to="/booking"
                                            state={{ plan: plan.name, type: 'VIP', price: plan.vipPrice }}
                                            className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary/90 transition"
                                        >
                                            Select VIP
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Features Comparison */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl p-8 shadow-lg ${plan.popular ? 'ring-4 ring-accent' : ''}`}>
                            {plan.popular && (
                                <div className="bg-accent text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-6">{plan.name} Features</h3>
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-700">
                                        <span className="text-primary mr-3 mt-1">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <div className="bg-white rounded-2xl p-12 shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-2">What's the difference between Group and VIP?</h3>
                            <p className="text-gray-600">Group classes have up to 8 students for collaborative learning. VIP is one-on-one for personalized attention.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Are all classes online?</h3>
                            <p className="text-gray-600">Yes! All Code Craft classes are conducted online through live interactive sessions. You can join from anywhere in Egypt.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Can I switch plans?</h3>
                            <p className="text-gray-600">Yes! You can upgrade or downgrade your plan at any time. Changes take effect in the next billing cycle.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
                            <p className="text-gray-600">We accept credit cards, debit cards, and mobile wallets through our secure payment integration.</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-600 mb-8">Choose your plan and start learning today!</p>
                    <Link
                        to="/booking"
                        className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition"
                    >
                        Book Your First Session
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;