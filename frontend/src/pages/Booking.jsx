import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Booking = () => {
    const location = useLocation();
    const preSelectedPlan = location.state || {};

    const [formData, setFormData] = useState({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        plan: preSelectedPlan.plan || '',
        sessionType: preSelectedPlan.type || '',
        program: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const plans = ['Starter', 'Growth', 'Pro'];
    const programs = ['Scratch Basics', 'Python for Kids', 'Web Development', 'App Development', 'Game Development', 'AI & Robotics'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9+\s-()]+$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        if (!formData.childName.trim()) newErrors.childName = 'Child name is required';
        if (!formData.childAge) {
            newErrors.childAge = 'Child age is required';
        } else if (formData.childAge < 7 || formData.childAge > 16) {
            newErrors.childAge = 'Age must be between 7 and 16';
        }
        if (!formData.plan) newErrors.plan = 'Please select a plan';
        if (!formData.sessionType) newErrors.sessionType = 'Please select session type';
        if (!formData.program) newErrors.program = 'Please select a program';

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitSuccess(true);
                setFormData({
                    parentName: '',
                    email: '',
                    phone: '',
                    childName: '',
                    childAge: '',
                    plan: '',
                    sessionType: '',
                    program: '',
                    message: ''
                });

                setTimeout(() => {
                    alert('Redirecting to payment...\n\nIn production, this will redirect to Paymob checkout.');
                }, 2000);
            } else {
                alert(data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
                <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl text-center">
                    <div className="text-7xl mb-6">🎉</div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Registration Successful!</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Thank you for choosing Code Craft! We've received your registration and will contact you shortly to confirm your first online session.
                    </p>
                    <div className="bg-accent/20 rounded-2xl p-6 mb-8">
                        <p className="text-lg font-semibold text-gray-800">
                            Check your email at <span className="text-primary">{formData.email || 'your registered email'}</span> for confirmation details.
                        </p>
                    </div>
                    <button
                        onClick={() => setSubmitSuccess(false)}
                        className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition"
                    >
                        Register Another Student
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">Book Your First Session</h1>
                    <p className="text-xl text-gray-600">
                        Fill out the form below and start your child's coding journey today! 🤖
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                    <form onSubmit={handleSubmit}>
                        {/* Parent Information */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-6 text-primary">Parent Information</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Parent/Guardian Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-primary transition ${errors.parentName ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                        placeholder="John Doe"
                                    />
                                    {errors.parentName && <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-primary transition ${errors.email ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-primary transition ${errors.phone ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                        placeholder="+20 123 456 7890"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Child Information */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-6 text-secondary">Child Information</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Child's Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="childName"
                                        value={formData.childName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-secondary transition ${errors.childName ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                        placeholder="Jane Doe"
                                    />
                                    {errors.childName && <p className="text-red-500 text-sm mt-1">{errors.childName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Child's Age *
                                    </label>
                                    <input
                                        type="number"
                                        name="childAge"
                                        value={formData.childAge}
                                        onChange={handleChange}
                                        min="7"
                                        max="16"
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-secondary transition ${errors.childAge ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                        placeholder="10"
                                    />
                                    {errors.childAge && <p className="text-red-500 text-sm mt-1">{errors.childAge}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Program Selection */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-6 text-accent">Program Selection</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Select Plan *
                                    </label>
                                    <select
                                        name="plan"
                                        value={formData.plan}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-accent transition ${errors.plan ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                    >
                                        <option value="">Choose a plan...</option>
                                        {plans.map(plan => (
                                            <option key={plan} value={plan}>{plan}</option>
                                        ))}
                                    </select>
                                    {errors.plan && <p className="text-red-500 text-sm mt-1">{errors.plan}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Session Type *
                                    </label>
                                    <select
                                        name="sessionType"
                                        value={formData.sessionType}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-accent transition ${errors.sessionType ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                    >
                                        <option value="">Choose session type...</option>
                                        <option value="Group">Group Class</option>
                                        <option value="VIP">VIP 1-on-1</option>
                                    </select>
                                    {errors.sessionType && <p className="text-red-500 text-sm mt-1">{errors.sessionType}</p>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Select Program *
                                    </label>
                                    <select
                                        name="program"
                                        value={formData.program}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-accent transition ${errors.program ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                    >
                                        <option value="">Choose a program...</option>
                                        {programs.map(program => (
                                            <option key={program} value={program}>{program}</option>
                                        ))}
                                    </select>
                                    {errors.program && <p className="text-red-500 text-sm mt-1">{errors.program}</p>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Additional Message (Optional)
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent transition"
                                        placeholder="Any questions or special requests?"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-gradient-to-r from-primary to-secondary text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSubmitting ? 'Processing...' : 'Complete Registration & Pay'}
                            </button>
                            <p className="text-sm text-gray-600 mt-4">
                                By submitting this form, you agree to our terms and conditions.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;
