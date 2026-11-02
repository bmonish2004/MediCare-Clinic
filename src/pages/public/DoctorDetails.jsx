import doctor1 from "../../assets/doctor1.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import doctor2 from "../../assets/doctor2.png";
import doctor3 from "../../assets/doctor3.png";
import doctor4 from "../../assets/doctor4.png";

const doctors = [
    {
        id: 1,
        img: doctor1,
        name: "Dr. Albert Pinto",
        type: "General Physician",
        rating: "4.8",
        reviews: "120+",
        experience: "10+",
        patients: "2,000+",
        description:
            "Dr. Albert Pinto provides comprehensive healthcare, preventive care, early diagnosis, and personalized treatment plans."
    },
    {
        id: 2,
        img: doctor2,
        name: "Dr. Chris Wagner",
        type: "Orthopedic Surgeon",
        rating: "4.9",
        reviews: "100+",
        experience: "12+",
        patients: "1,800+",
        description:
            "Dr. Chris Wagner focuses on bone, joint, and musculoskeletal care."
    },
    {
        id: 3,
        img: doctor3,
        name: "Dr. Alexa Flexy",
        type: "Cardiologist",
        rating: "4.8",
        reviews: "110+",
        experience: "8+",
        patients: "1,500+",
        description:
            "Dr. Alexa Flexy focuses on heart health and cardiovascular care."
    },
    {
        id: 4,
        img: doctor4,
        name: "Dr. Oliver Sachs",
        type: "Pediatrician",
        rating: "4.9",
        reviews: "90+",
        experience: "9+",
        patients: "1,600+",
        description:
            "Dr. Oliver Sachs provides healthcare for infants, children, and adolescents."
    }
];

const relatedDoctors = [
    {
        id: 2,
        img: doctor2,
        name: "Dr. Chris Wagner",
        type: "Orthopedic Surgeon",
        profile: "View Profile →"
    },
    {
        id: 3,
        img: doctor3,
        name: "Dr. Alexa Flexy",
        type: "Cardiologist",
        profile: "View Profile →"
    },
    {
        id: 4,
        img: doctor4,
        name: "Dr. Oliver Sachs",
        type: "Pediatrician",
        profile: "View Profile →"
    }
]


export function DoctorDetails() {

    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const { id } = useParams();

    const doctor = doctors.find(
        (item) => item.id === Number(id)
    );

    if (!doctor) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-2xl font-bold">
                    Doctor not found
                </h1>
                <Link
                    to="/doctors"
                    className="text-teal-700 underline mt-4 inline-block"
                >
                    Back to Doctors
                </Link>
            </div>
        );
    }

    return (
        <>
            <div>
                <section className="flex flex-col h-full justify-center items-center md:flex-row md:justify-center space-x-10 bg-teal-100/60 md:h-100 space-y-10 md:space-y-1 px-2">
                    <div className="py-2 md:py-10 w-72 md:w-80 h-80 md:h-96">
                        <img
                            src={doctor.img}
                            alt="doctor1"
                            className="w-full h-full object-cover object-top rounded-2xl"
                        />
                    </div>
                    <div className="flex flex-col justify-start space-y-6 p-4">
                        <div>
                            <h1 className="text-3xl font-bold">{doctor.name}</h1>
                            <h1 className="text-teal-700 font-semibold text-lg">{doctor.type}</h1>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex items-center justify-center gap-2">
                                <h1>⭐</h1>
                                <div>
                                    <h1 className="font-semibold">{doctor.rating}</h1>
                                    <p className="text-xs text-gray-600">({doctor.reviews} reviews)</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <h1>📅</h1>
                                <div>
                                    <h1 className="font-semibold">{doctor.experience}</h1>
                                    <p className="text-xs text-gray-600">Years Experienced</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <h1>👥</h1>
                                <div>
                                    <h1 className="font-semibold">{doctor.patients}</h1>
                                    <p className="text-xs text-gray-600">Patients Treated</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex-1 max-w-md">
                            <p className="text-gray-600 text-base/8">{doctor.description}</p>
                        </div>
                    </div>

                    <div className="bg-teal-300/30 my-2 mb-8 rounded-3xl p-8 max-w-sm w-full">
                        <div className="grid grid-cols-2 gap-y-7 gap-x-6">

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xs mb-3">
                                    <svg className="w-7 h-7 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM16 12.5v4.5a3.5 3.5 0 01-7 0v-10A2.5 2.5 0 006.5 4.5H5m7 2.5H7.5A2.5 2.5 0 005 9.5" />
                                    </svg>
                                </div>
                                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight max-w-25">
                                    Preventive Healthcare
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xs mb-3">
                                    <svg className="w-7 h-7 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight max-w-25">
                                    General Illness Treatment
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xs mb-3">
                                    <svg className="w-7 h-7 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0zM12 9v3m0 0v3m0-3h3m-3 0H9" />
                                    </svg>
                                </div>
                                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight max-w-25">
                                    Chronic Disease Management
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xs mb-3">
                                    <svg className="w-7 h-7 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight max-w-25">
                                    Health Checkups
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="flex justify-center">
                    <div className="flex flex-col border border-gray-300 rounded-2xl m-5 w-1/1 md:w-1/2">
                        <div className="flex justify-center items-center gap-5 bg-teal-800 text-white px-3 py-4 border-0 rounded-t-2xl">
                            <div>
                                <h1 className="text-2xl bg-teal-300/50 p-2 rounded-full">📅</h1>
                            </div>
                            <div>
                                <h1 className="font-bold">Book an Appointment</h1>
                                <p className="text-sm text-gray-300">Choose a date and time to meet {doctor.name}</p>
                            </div>
                        </div>
                        <div className="space-y-4 p-8 flex flex-col items-center">
                            <div className="space-y-5">
                                <div className="space-x-4 flex">
                                    <label className="font-bold ps-1">Select Date:</label>
                                    <input
                                        type="date"
                                        min={new Date().toLocaleDateString("en-CA")}
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="border border-gray-500 px-3 py-1 rounded-xl w-40 md:w-70 bg-gray-200/50"
                                    />
                                </div>
                                <div className="space-x-4 flex">
                                    <label className="font-bold ps-1">Select Time:</label>
                                    <input
                                        type="time"
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="border border-gray-500 px-3 py-1 rounded-xl w-40 md:w-70 bg-gray-200/50"
                                    />
                                </div>
                            </div>
                            <div className="pt-3">
                                <button
                                    onClick={() => {
                                        if (!selectedDate || !selectedTime) {
                                            alert("Please select both date and time.");
                                            return;
                                        }

                                        navigate("/contact-us", {
                                            state: {
                                                doctorName: doctor.name,
                                                date: selectedDate,
                                                time: selectedTime,
                                            },
                                        });
                                    }}
                                    className="text-white px-5 py-3 text-center font-semibold bg-teal-800 rounded-xl hover:bg-teal-900 transition"
                                >
                                    Continue to Contact →
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-teal-100/70 mx-10 my-4 px-7 py-5 border-0 rounded-2xl">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-teal-800">Related Doctors</h1>
                        <Link
                            to="/doctors"
                            className="text-teal-700 rounded-lg text-sm font-bold hover:underline hover:text-teal-800 transition"
                        >
                            View All Doctors →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
                        {relatedDoctors.map((doctor) => (
                            <div
                                key={doctor.id}
                                className="border border-gray-200 rounded-xl py-10 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1 bg-white/70"
                            >
                                <div className="flex items-center justify-center gap-5">
                                    <img
                                        src={doctor.img}
                                        alt={doctor.name}
                                        className="w-25 h-20 object-cover object-top rounded-xl"
                                    />
                                    <div className="space-y-1">
                                        <h2 className="font-bold text-gray-900">
                                            {doctor.name}
                                        </h2>

                                        <p className="text-sm text-gray-500 ">
                                            {doctor.type}
                                        </p>

                                        <Link
                                            to={`/doctors/${doctor.id}`}
                                            className="text-teal-700 font-medium text-sm cursor-pointer hover:text-teal-900  rounded-xl hover:underline "
                                        >
                                            {doctor.profile}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}