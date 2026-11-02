
import doctor from "../../assets/doctor.png";

export default function AboutSection() {
    return (
        <section className="flex flex-col justify-center px-6 py-15 bg-teal-100/40">
            <div className="flex flex-col md:flex-row items-center justify-center gap-15 p-4">
                <div>
                    <img
                        src={doctor}
                        alt="Doctor"
                        className="w-100 h-60 object-cover object-center rounded-xl"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-teal-700 font-semibold text-xl">
                        ABOUT MEDICARE
                    </h1>

                    <h1 className="text-gray-900 font-bold text-xl">
                        Caring for Your Health, Every Step of the Way
                    </h1>

                    <p className="text-gray-600">
                        We are committed to compassionate, personalized healthcare
                        for every member of your family.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 place-items-center place-content-center pt-10">
                <div className="space-y-1 flex gap-5">
                    <h1 className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mb-3">
                        ✅
                    </h1>
                    <div>
                        <h2 className="text-lg font-bold">Trusted Professionals</h2>

                        <p className="text-gray-600 text-base">
                            Experienced healthcare team
                        </p>
                    </div>
                </div>

                <div className="space-y-1  flex gap-5">
                    <h1 className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center text-xl mb-3">
                        ⚕️
                    </h1>
                    <div>
                        <h2 className="text-lg font-bold">Patient-First Care</h2>

                        <p className="text-gray-600 text-base">
                            Personalized support
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
