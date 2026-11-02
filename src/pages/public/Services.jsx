import { useState } from 'react';
import ServicePageDoctor from '../../assets/ServicePageDoctor.png'
import serviceIMG from '../../assets/servicesImg.png'
import { Link } from "react-router-dom";

const services = [
    {
        id: 1,
        icon: "🩺",
        name: "General Medicine",
        about: "Complete care for all age groups",
        desc: "Learn More →",
        details: "Our general medicine department provides routine health checkups, preventive care, diagnosis and treatment for common illnesses."
    },
    {
        id: 2,
        icon: "❤️",
        name: "Cardiology",
        about: "Expert heart care and treatment",
        desc: "Learn More →",
        details: "Our cardiology department focuses on heart health, cardiovascular assessments, preventive care and treatment."
    },
    {
        id: 3,
        icon: "👶🏻",
        name: "Pediatrics",
        about: "Specialized care for little ones",
        desc: "Learn More →",
        details: "We provide specialized healthcare for infants, children and adolescents, including regular checkups and vaccinations."
    },
    {
        id: 4,
        icon: "🦴",
        name: "Orthopedics",
        about: "Bone and joint care",
        desc: "Learn More →",
        details: "Our orthopedic services focus on bone, joint and muscle conditions, injury management and mobility care."
    },
    {
        id: 5,
        icon: "🔬",
        name: "Diagnostics",
        about: "Accurate and reliable test results",
        desc: "Learn More →",
        details: "We provide diagnostic services and medical testing to support accurate diagnosis and effective treatment."
    },
    {
        id: 6,
        icon: "📈",
        name: "Wellness Care",
        about: "Support for a healthier life",
        desc: "Learn More →",
        details: "Our wellness services focus on preventive healthcare, healthy lifestyle guidance and regular health assessments."
    }
];

const chooses = [
    {
        id: 1,
        icon: "👥",
        text: "Experienced Doctors",
        para: "Skilled and caring healthcare professionals"
    },
    {
        id: 2,
        icon: "⛨",
        text: "Patient-Centered Care",
        para: "Your health and comfort are our top priority"
    },
    {
        id: 3,
        icon: "⚙️",
        text: "Modern Facilities",
        para: "Advanced technology and modern equipment"
    },
    {
        id: 4,
        icon: "🕒",
        text: "Convenient Access",
        para: "Easy appointment booking and minimal wait times"
    }
]

const processes = [
    {
        id: 1,
        number: 1,
        head: "Book Appointment",
        body: "Choose your preferred date and time."
    },
    {
        id: 2,
        number: 2,
        head: "Consult a Doctor",
        body: "Meet with our expert specialists."
    },
    {
        id: 3,
        number: 3,
        head: "Get Treatment",
        body: "Receive personalized care and treatment."
    },
    {
        id: 4,
        number: 4,
        head: "Stay Healthy",
        body: "Follow up and ongoing support."
    }
]

const questions = [
    {
        id: 1,
        ques: "What services do you offer?",
        icon: "+",
        answer: "We offer General Medicine, Cardiology, Pediatrics, Orthopedics, Diagnostics and Wellness Care."
    },
    {
        id: 2,
        ques: "Do I need an appointment?",
        icon: "+",
        answer: "Appointments are recommended to reduce waiting time. However, walk-in consultations may also be available depending on doctor availability."
    },
    {
        id: 3,
        ques: "Do you accept insurance?",
        icon: "+",
        answer: "Insurance acceptance depends on your provider and policy. Please contact our clinic to confirm the available insurance options."
    },
    {
        id: 4,
        ques: "What are your consultation hours?",
        icon: "+",
        answer: "Our clinic is open Monday to Saturday, from 9:00 AM to 6:00 PM. Sunday consultations are closed."
    },
]

export function Services() {

    const [openQuestion, setOpenQuestion] = useState(null);

    const [expandedService, setExpandedService] = useState(null);

    return (
        <>
            <div>
                <section className="bg-teal-100/70 p-8 flex flex-col md:flex-row md:justify-around">
                    <div className="space-y-8 flex-1 md:max-w-md flex flex-col items-center md:items-start">
                        <h3 className="text-teal-700 font-semibold text-2xl">Our Services</h3>
                        <h1 className="text-3xl font-bold">Complete Healthcare for a Healthier Tomorrow</h1>
                        <p className="text-gray-600 text-base/8">We offer a wide range of medical services with modern facilities and experienced healthcare professionals to keep you and your family healthy</p>
                        <Link
                            to="/contact-us"
                            className="text-white px-5 py-3 bg-teal-700 rounded-xl hover:bg-teal-800 transition"
                        >
                            Book an Appointment →
                        </Link>
                    </div>
                    <div className='pt-15 md:pt-0 flex flex-col items-center space-y-4 '>
                        <div className="w-full max-w-xs sm:max-w-sm md:w-100 h-72 sm:h-80 md:h-75 overflow-hidden rounded-2xl shadow-md">
                            <img
                                src={ServicePageDoctor}
                                alt="ServicePageDoctor"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="flex items-center gap-2 bg-white/90 w-fit px-3 py-2 md:w-35 rounded-2xl">
                            <h1 className='text-xl'>💚</h1>
                            <div>
                                <h1 className="font-bold text-teal-800 text-sm">Your Health</h1>
                                <p className="text-teal-600 text-sm">Our Priority</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='py-15 px-7'>
                    <div className='text-center space-y-3 mb-8'>
                        <h1 className='text-3xl font-bold'>Our Medical Services</h1>
                        <p className='text-gray-500'>From preventive care to specialized treatment, we provide comprehensive healthcare services for all age groups.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="border border-gray-200 rounded-xl p-6 h-full items-center flex flex-col gap-3 shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1"
                            >
                                <div className='flex gap-5 items-center w-full max-w-xs'>
                                    <div className="bg-teal-100 rounded-full w-14 h-14 flex items-center justify-center text-2xl shrink-0">
                                        {service.icon}
                                    </div>

                                    <div className='flex-1 flex flex-col min-w-0 space-y-2'>
                                        <h2 className="font-bold text-gray-900 ">
                                            {service.name}
                                        </h2>

                                        <p className="text-sm text-gray-500 h-10">
                                            {service.about}
                                        </p>

                                        <button
                                            onClick={() =>
                                                setExpandedService(
                                                    expandedService === service.id
                                                        ? null
                                                        : service.id
                                                )
                                            }
                                            className="text-teal-700 mt-auto font-medium text-sm cursor-pointer hover:text-teal-900 text-left"
                                        >
                                            {expandedService === service.id ? "Show Less ↑" : service.desc}
                                        </button>

                                        {expandedService === service.id && (
                                            <p className="text-sm text-gray-600 leading-6 mt-2">
                                                {service.details}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='py-15 px-7 bg-teal-200/60'>
                    <div className='text-center space-y-2'>
                        <h1 className='text-3xl font-bold'>Why Choose MediCare?</h1>
                        <p className='text-gray-500'>We are committed to providing high quality, patient-centered care with focus on your health and well-being.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6 mt-5">
                        {chooses.map((choose) => (
                            <div key={choose.id}
                                className='border border-gray-400/60 rounded-xl p-6 h-full items-center flex flex-col gap-3 '>
                                <div className='flex flex-col items-center justify-center gap-4'>
                                    <div className='bg-white p-3 rounded-full'>
                                        <span className='text-2xl'>{choose.icon}</span>
                                    </div>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <h1 className='font-bold text-lg'>
                                            {choose.text}
                                        </h1>
                                        <p className='text-gray-600 text-base/6 text-center'>
                                            {choose.para}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='my-10'>
                    <div className='text-center space-y-2'>
                        <h1 className='font-bold text-3xl'>Our Process</h1>
                        <p className='text-gray-500 text-lg'>Get the care you need in simple steps</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6 mt-5">
                        {processes.map((process) => (
                            <div key={process.id}
                                className="border border-gray-200 rounded-xl p-6 h-full items-center flex flex-col justify-center gap-3 shadow-sm min-w-0"
                            >
                                <div className='flex gap-6 items-center w-60 sm:w-45 md:w-50'>
                                    <div className=''>
                                        <span className='text-4xl bg-teal-200 py-2.5 px-5 rounded-full'>{process.number}</span>
                                    </div>
                                    <div className='flex flex-col gap-2 items-start'>
                                        <h1 className='font-bold text-lg'>
                                            {process.head}
                                        </h1>
                                        <p className='text-gray-600 text-base/6'>
                                            {process.body}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="px-4 py-8 max-w-6xl mx-auto">
                    <div className="bg-teal-800 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between">
                        <div className="p-6 sm:p-10 md:p-12 flex-1 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                                Ready to take the Next Step?
                            </h2>
                            <p className="text-teal-100 text-sm sm:text-base max-w-md">
                                Book an appointment today and let our experts take care of your health.
                            </p>
                            <Link
                                to="/contact-us"
                                className="w-full sm:w-auto text-teal-900 bg-white hover:bg-gray-100 font-bold px-6 py-3 rounded-xl transition text-center"
                            >
                                Book Appointment →
                            </Link>
                        </div>

                        <div className="w-fit md:w-fit flex items-end justify-center  md:px-0 ">
                            <img
                                src={serviceIMG}
                                alt="serviceImg"
                                className="w-fit max-w-xs sm:max-w-sm md:max-w-md  md:max-h-80 object-contain object-bottom mb-8 md:m-0 border-0 rounded-xl md:rounded-none"
                            />
                        </div>
                    </div>
                </section>


                <section className="py-10">
                    <div className="text-center space-y-2">
                        <h1 className="font-bold text-3xl">
                            Frequently Asked Questions
                        </h1>

                        <p className="text-gray-500 text-lg">
                            Find answers to common questions about our services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10">
                        {questions.map((question) => (
                            <div
                                key={question.id}
                                className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
                            >
                                <button
                                    onClick={() =>
                                        setOpenQuestion(
                                            openQuestion === question.id
                                                ? null
                                                : question.id
                                        )
                                    }
                                    className="w-full flex items-center justify-between text-left"
                                >
                                    <h2 className="font-semibold text-gray-900 text-base">
                                        {question.ques}
                                    </h2>

                                    <span className="text-xl text-teal-700 ml-4 cursor-pointer">
                                        {openQuestion === question.id ? "−" : "+"}
                                    </span>
                                </button>

                                {openQuestion === question.id && (
                                    <p className="text-gray-600 text-sm leading-6 mt-4 border-t border-gray-200 pt-3">
                                        {question.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}