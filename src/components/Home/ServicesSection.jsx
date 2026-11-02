import { useState } from "react";

const services = [
    {
        id: 1,
        icon: "🩺",
        name: "General Medicine",
        about: "Complete care for all age groups",
        desc: "Learn More →",
        details: "Consultations for common illnesses, preventive care, health checkups and ongoing medical conditions."
    },
    {
        id: 2,
        icon: "❤️",
        name: "Cardiology",
        about: "Expert heart care and treatment",
        desc: "Learn More →",
        details: "Heart health assessments, cardiovascular consultations and guidance for managing heart-related conditions."
    },
    {
        id: 3,
        icon: "👶🏻",
        name: "Pediatrics",
        about: "Specialized care for little ones",
        desc: "Learn More →",
        details: "Healthcare for infants and children, including growth monitoring, vaccinations and general consultations."
    },
    {
        id: 4,
        icon: "🦴",
        name: "Orthopedics",
        about: "Bone and joint care",
        desc: "Learn More →",
        details: "Consultations for bone, joint and muscle problems, injuries and mobility concerns."
    },
    {
        id: 5,
        icon: "🔬",
        name: "Diagnostics",
        about: "Accurate and reliable test results",
        desc: "Learn More →",
        details: "Diagnostic testing and health assessments to support accurate medical evaluation."
    },
    {
        id: 6,
        icon: "📈",
        name: "Wellness Care",
        about: "Support for a healthier life",
        desc: "Learn More →",
        details: "Preventive health guidance, lifestyle consultations and support for maintaining a healthy routine."
    }
];


export default function ServicesSection() {

    const [expandedService, setExpandedService] = useState(null);

    return (
        <section className="pt-15">
            <div className="flex flex-col items-center p-5 space-y-3">
                <h1 className="text-teal-700 font-semibold text-xl">
                    OUR SERVICES
                </h1>

                <h1 className="text-gray-900 font-bold text-xl">
                    Comprehensive Healthcare Services
                </h1>

                <p className="text-gray-500 text-center">
                    We offer a wide range of medical services to keep you and your family healthy.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="border border-gray-200 rounded-xl py-10 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1"
                    >
                        <div className="bg-teal-100 rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                            {service.icon}
                        </div>

                        <h2 className="font-bold text-gray-900">
                            {service.name}
                        </h2>

                        <p className="text-sm text-gray-500 text-center">
                            {service.about}
                        </p>

                        <button
                            onClick={() =>
                                setExpandedService(
                                    expandedService === service.id ? null : service.id
                                )
                            }
                            className="text-teal-700 font-medium text-sm cursor-pointer hover:text-teal-900"
                        >
                            {expandedService === service.id ? "Show Less ↑" : service.desc}
                        </button>
                        {expandedService === service.id && (
                            <p className="text-sm text-gray-600 text-center px-5 mt-2">
                                {service.details}
                            </p>
                        )}

                    </div>
                ))}
            </div>
        </section>
    );
}
