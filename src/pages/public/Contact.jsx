
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const contactInfo = [
    {
        id: 1,
        icon: "📍",
        title: "Our Location",
        details: "123 Health Street, Chennai, Tamil Nadu",
    },
    {
        id: 2,
        icon: "📞",
        title: "Phone Number",
        details: "+91 98765 43210",
    },
    {
        id: 3,
        icon: "✉️",
        title: "Email Address",
        details: "info@medicare.com",
    },
    {
        id: 4,
        icon: "🕒",
        title: "Working Hours",
        details: "Mon – Sat: 9 AM – 6 PM",
    },
];

const formFields = [
    {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        rules: {
            required: "Full name is required",
            minLength: {
                value: 3,
                message: "Name must contain at least 3 characters",
            },
        },
    },
    {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
        rules: {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
            },
        },
    },
    {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number",
        rules: {
            required: "Phone number is required",
            pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
            },
        },
    },
    {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "Enter subject",
        rules: {
            required: "Subject is required",
            minLength: {
                value: 3,
                message: "Subject must contain at least 3 characters",
            },
        },
    },
];

export function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const location = useLocation();

    const appointment = location.state;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log("Contact Form Data:", data);
        setSubmitted(true);
        reset();
    };

    return (
        <div className="bg-white">

            <section className="bg-teal-50 py-16 px-6 text-center">
                <p className="text-teal-700 font-semibold mb-3 tracking-wider">
                    GET IN TOUCH
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Contact Us
                </h1>

                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    We're here to help you. Reach out to our team for appointments,
                    questions, or any healthcare assistance.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        We'd Love to Hear From You
                    </h2>

                    <p className="text-gray-500">
                        Contact us through any of the following channels.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border border-gray-100 shadow-md rounded-2xl p-7 text-center hover:shadow-lg transition"
                        >
                            <div className="text-3xl mb-4">{item.icon}</div>

                            <h3 className="font-bold text-lg mb-2 text-gray-900">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.details}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-10">
                        <p className="text-teal-700 font-semibold mb-2">
                            SEND A MESSAGE
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Get in Touch With Us
                        </h2>

                        <p className="text-gray-500">
                            Have a question? Fill out the form below.
                        </p>
                    </div>

                    {appointment && (
                        <div className="mb-6 bg-teal-50 border border-teal-200 rounded-xl p-5">
                            <h3 className="font-bold text-teal-800 mb-3">
                                Appointment Enquiry
                            </h3>

                            <p className="text-gray-700 text-sm">
                                <strong>Doctor:</strong> {appointment.doctorName}
                            </p>

                            <p className="text-gray-700 text-sm mt-2">
                                <strong>Date:</strong> {appointment.date}
                            </p>

                            <p className="text-gray-700 text-sm mt-2">
                                <strong>Time:</strong> {appointment.time}
                            </p>
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-white shadow-md rounded-2xl p-6 md:p-10"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {formFields.map((field) => (
                                <div key={field.name}>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        {field.label}
                                    </label>

                                    <input
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        {...register(field.name, field.rules)}
                                        className={`w-full border rounded-lg px-4 py-3 outline-none transition focus:ring-2 focus:ring-teal-100 ${errors[field.name]
                                                ? "border-red-500"
                                                : "border-gray-300 focus:border-teal-600"
                                            }`}
                                    />

                                    {errors[field.name] && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors[field.name].message}
                                        </p>
                                    )}
                                </div>
                            ))}

                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Message
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Write your message here..."
                                {...register("message", {
                                    required: "Message is required",
                                    minLength: {
                                        value: 10,
                                        message: "Message must contain at least 10 characters",
                                    },
                                })}
                                className={`w-full border rounded-lg px-4 py-3 outline-none resize-none transition focus:ring-2 focus:ring-teal-100 ${errors.message
                                        ? "border-red-500"
                                        : "border-gray-300 focus:border-teal-600"
                                    }`}
                            />

                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="mt-6 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-8 py-3 rounded-lg transition"
                        >
                            Send Message →
                        </button>

                        {submitted && (
                            <p className="text-green-600 font-medium mt-4">
                                Your message has been submitted successfully!
                            </p>
                        )}

                    </form>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-10">
                    <p className="text-teal-700 font-semibold mb-2">
                        FIND US
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Visit Our Clinic
                    </h2>

                    <p className="text-gray-500">
                        We'd be happy to welcome you to MediCare.
                    </p>
                </div>

                <div className="bg-teal-50 rounded-2xl p-8 md:p-12 text-center">
                    <div className="text-5xl mb-4">📍</div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        MediCare Clinic
                    </h3>

                    <p className="text-gray-600 mb-5">
                        123 Health Street, Chennai, Tamil Nadu
                    </p>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Chennai+Tamil+Nadu"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Get Directions →
                    </a>
                </div>
            </section>

        </div>
    );
}
