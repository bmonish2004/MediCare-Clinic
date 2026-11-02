import doctorsImg from '../../assets/DoctorsPage.png'
import { Link } from "react-router-dom";

import doctor1 from "../../assets/doctor1.png";
import doctor2 from "../../assets/doctor2.png";
import doctor3 from "../../assets/doctor3.png";
import doctor4 from "../../assets/doctor4.png";

import { useState } from "react";

const doctorCategory = [
    {
        id: 1,
        type: "All Specialties"
    },
    {
        id: 2,
        type: "General Medicine"
    },
    {
        id: 3,
        type: "Cardiology"
    },
    {
        id: 4,
        type: "Pediatrics"
    },
    {
        id: 5,
        type: "Orthopedics"
    },
]

const doctorsCard = [
    {
        id: 1,
        img: doctor1,
        name: "Dr. Albert Pinto",
        type: "General Physician",
        desc: "Provides general medical consulations and preventive healthcare for all age groups.",
        exp: "📅 10+ years experience",
        loc: "📍 MediCare Clinic",
        profile: "View Profile →"
    },
    {
        id: 2,
        img: doctor2,
        name: "Dr. Chris Wagner",
        type: "Orthopedic Surgeon",
        desc: "Specializes in bone, joint and musculoskeletal care to help you move better and live pain-free.",
        exp: "📅 12+ years experience",
        loc: "📍 MediCare Clinic",
        profile: "View Profile →"
    },
    {
        id: 3,
        img: doctor3,
        name: "Dr. Alexa Flexy",
        type: "Cardiologist",
        desc: "Focuses on heart health, preventive cardiology and advanced treatment for cardiovascular conditions.",
        exp: "📅 8+ years experience",
        loc: "📍 MediCare Clinic",
        profile: "View Profile →"
    },
    {
        id: 4,
        img: doctor4,
        name: "Dr. Oliver Sachs",
        type: "Pediatrician",
        desc: "Provides comprehensive healthcare for infants, children and adolescents with a gentle and caring approach.",
        exp: "📅 9+ years experience",
        loc: "📍 MediCare Clinic",
        profile: "View Profile →"
    }
];


export function Doctors() {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Specialties");

    const filteredDoctors = doctorsCard.filter((doctor) => {
        const matchesSearch =
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.type.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All Specialties" ||
            (selectedCategory === "General Medicine" &&
                doctor.type === "General Physician") ||
            (selectedCategory === "Cardiology" &&
                doctor.type === "Cardiologist") ||
            (selectedCategory === "Pediatrics" &&
                doctor.type === "Pediatrician") ||
            (selectedCategory === "Orthopedics" &&
                doctor.type === "Orthopedic Surgeon");


        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <div className="w-full md:h-80 px-6 gap-8 bg-teal-300/10 flex flex-col md:flex-row items-center justify-around">
                <div className="mx-5 space-y-4 py-8">
                    <h1 className="text-teal-700 tracking-widest font-semibold">
                        OUR DOCTORS
                    </h1>

                    <h1 className="font-bold text-3xl md:text-4xl">
                        Meet Our Expert Doctors
                    </h1>

                    <p className="text-sm text-gray-700 font-medium">
                        Our experienced and compassionate doctors are here to provide the best care for you and your family
                    </p>
                </div>
                <div className='w-full md:w-5/12 h-64 md:h-full'>
                    <img src={doctorsImg} alt="doctors"
                        className="w-full h-full object-contain" />
                </div>
            </div>

            <div className='flex justify-around flex-col md:flex-row items-center gap-4 pt-10 px-10'>
                <div className='m-2'>
                    <input type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='🔍︎  Search doctors by name or speciality...'
                        className='p-2 border rounded-xl border-gray-300 focus:outline-0 focus:border-gray-500 bg-gray-100 w-85 md:w-100' />
                </div>
                <div className='flex items-center gap-2 flex-wrap'>
                    {doctorCategory.map((Category) => (
                        <button
                            key={Category.id}
                            onClick={() => setSelectedCategory(Category.type)}
                            className={`text-sm cursor-pointer px-5 py-2 rounded-xl font-bold transition ${selectedCategory === Category.type
                                ? "bg-teal-700 text-white"
                                : "bg-gray-300 text-teal-700 hover:bg-teal-100"}`}>
                            {Category.type}
                        </button>
                    ))}
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-6">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="border border-gray-200 rounded-xl py-5 flex flex-col items-start px-4 gap-3 shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1"
                        >
                            <img
                                src={doctor.img}
                                alt={doctor.name}
                                className="w-full h-70 object-cover object-top rounded-xl"
                            />

                            <h2 className="font-bold text-gray-900 text-xl">
                                {doctor.name}
                            </h2>

                            <p className="text-md text-teal-600">
                                {doctor.type}
                            </p>

                            <p className="text-md text-gray-600 border-b border-gray-300">
                                {doctor.desc}
                            </p>

                            <p className="text-sm text-gray-600">
                                {doctor.exp}
                            </p>

                            <p className="text-sm text-gray-600">
                                {doctor.loc}
                            </p>

                            <Link
                                to={`/doctors/${doctor.id}`}
                                className="text-white w-full text-center bg-teal-700 p-2 rounded-xl hover:bg-teal-800"
                            >
                                {doctor.profile}
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                            No Doctors Found
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Try another name or specialty.
                        </p>

                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedCategory("All Specialties");
                            }}
                            className="mt-4 bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-800"
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </div>


            <div className='flex flex-col items-center space-y-6 md:flex-row justify-around py-10 bg-teal-500/20 mx-10 my-5 border-0 rounded-2xl'>
                <div className='flex gap-7 pt-7'>
                    <div className='flex items-center justify-center '>
                        <h1 className='bg-teal-400/50 p-3  rounded-full'>📅</h1>
                    </div>
                    <div className='space-y-1'>
                        <h1 className='text-teal-700 font-semibold'>NEED A CONSULTATION?</h1>
                        <h1 className='text-2xl font-bold'>Book an Appointment Today</h1>
                        <p className='text-gray-500 text-md'>Take the first step towards a healthier tomorrow.</p>
                    </div>
                </div>
                <div>
                    <Link
                        to="/contact-us"
                        className="text-white px-5 py-3 text-center font-normal cursor-pointer bg-teal-700 p-2 rounded-xl hover:bg-teal-800"                    >
                        Book Appointment →
                    </Link>
                </div>
            </div>
        </>
    )
}