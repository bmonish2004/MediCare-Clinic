
const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Patient",
        message:
            "The doctors were very kind and explained everything clearly. I had a comfortable experience.",
        rating: 5
    },
    {
        id: 2,
        name: "Rahul Kumar",
        role: "Patient",
        message:
            "The clinic is clean, the staff are friendly, and the care I received was excellent.",
        rating: 5
    },
    {
        id: 3,
        name: "Ananya Patel",
        role: "Patient",
        message:
            "Booking and attending my appointment was smooth. The medical team made me feel cared for.",
        rating: 5
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-15 px-6 bg-teal-50/70">
            <div className="text-center space-y-2 mb-8">
                <h2 className="text-teal-700 font-semibold text-xl">
                    PATIENT TESTIMONIALS
                </h2>

                <h3 className="text-gray-900 font-bold text-2xl">
                    What Our Patients Say
                </h3>

                <p className="text-gray-600">
                    Experiences from patients who have visited our clinic.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                    <article
                        key={testimonial.id}
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                    >
                        <div
                            className="text-amber-500 text-lg mb-3"
                            aria-label={`${testimonial.rating} out of 5 stars`}
                        >
                            {"★".repeat(testimonial.rating)}
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-5">
                            “{testimonial.message}”
                        </p>

                        <div>
                            <h4 className="font-bold text-gray-900">
                                {testimonial.name}
                            </h4>

                            <p className="text-sm text-gray-500">
                                {testimonial.role}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
