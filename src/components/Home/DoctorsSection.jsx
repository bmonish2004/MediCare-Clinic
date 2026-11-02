
import { Link } from "react-router-dom";

import doctor1 from "../../assets/doctor1.png";
import doctor2 from "../../assets/doctor2.png";
import doctor3 from "../../assets/doctor3.png";
import doctor4 from "../../assets/doctor4.png";

const doctors = [
    {
        id: 1,
        img: doctor1,
        name: "Dr. Albert Pinto",
        type: "General Physician",
        profile: "View Profile →"
    },
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
];

export default function DoctorsSection() {
    return (
        <section className="pt-15">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-15 mb-10">
                <div className="space-y-3 text-center md:text-left">
                    <h1 className="text-teal-700 font-semibold text-3xl">
                        OUR DOCTORS
                    </h1>

                    <h2 className="text-2xl font-bold">
                        Meet Our Expert Doctors
                    </h2>

                    <p className="text-gray-600 text-lg">
                        Experienced professionals dedicated to your health.
                    </p>
                </div>

                <Link
                    to="/doctors"
                    className="border border-teal-600 text-teal-700 px-5 py-3 rounded-lg text-lg font-bold hover:bg-teal-600 hover:text-white transition"
                >
                    View All Doctors →
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-6">
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="border border-gray-200 rounded-xl py-10 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1"
                    >
                        <img
                            src={doctor.img}
                            alt={doctor.name}
                            className="w-50 h-50 object-cover object-top rounded-xl"
                        />

                        <h2 className="font-bold text-gray-900">
                            {doctor.name}
                        </h2>

                        <p className="text-sm text-gray-500 text-center">
                            {doctor.type}
                        </p>

                        <Link
                            to={`/doctors/${doctor.id}`}
                            className="text-teal-700 font-medium text-sm cursor-pointer hover:text-teal-900 bg-teal-600/10 p-2 rounded-xl hover:bg-teal-600/20"
                        >
                            {doctor.profile}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
