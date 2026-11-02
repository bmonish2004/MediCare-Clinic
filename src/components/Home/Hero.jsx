import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import home1 from "../../assets/home1.png";

export default function Hero() {
    return (
        <div className="w-full py-8 px-6 gap-8 bg-teal-300/10 flex flex-col md:flex-row items-center justify-around">
            <div className="mx-5 space-y-4 md:w-1/3 mb-10 md:mb-0">
                <h1 className="text-teal-700 tracking-widest font-semibold">
                    YOUR HEALTH OUR PRIORITY
                </h1>

                <h1 className="font-bold text-3xl md:text-4xl">
                    Quality Care<br />
                    for a <span className="text-teal-700">Healthier Tomorrow</span>
                </h1>

                <p className="text-sm  text-gray-700 font-medium tracking-wide leading-7">
                    At MediCare Clinic & Wellness, we provide compassionate,
                    personalized and comprehensive healthcare for you and your family 
                </p>

                <div className="space-x-6 mt-10">
                    <Link
                        to="/contact-us"
                        className="bg-teal-700 text-white border rounded-lg px-3 py-2.5 cursor-pointer hover:bg-teal-800"
                    >
                        Book Appointment →
                    </Link>
                    <Link
                        to="/doctors"
                        className="text-teal-600 border-2 rounded-lg px-3 py-2 cursor-pointer hover:text-teal-800"
                    >Meet Our Doctors
                    </Link>
                </div>
            </div>

            <div className="mx-5 my-3 space-y-4">
                <img
                    src={home1}
                    alt="Doctor Caring Patients"
                    className="w-full max-w-90 h-60 object-cover rounded-2xl"
                />

                <div className="flex justify-center">
                    <div className="bg-white border-0 rounded p-3 w-50 flex items-center shadow-md gap-3">
                        <img
                            src={user}
                            alt="user"
                            className="w-8 bg-teal-100 border-0 rounded-full p-1"
                        />

                        <div className="flex flex-col">
                            <span className="text-sm text-gray-600">Trusted by</span>
                            <span className="font-bold text-gray-900 whitespace-nowrap">
                                5000+ Patients
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
