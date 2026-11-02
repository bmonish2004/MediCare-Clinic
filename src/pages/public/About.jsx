
import { Link } from "react-router-dom";
import aboutImg from "../../assets/aboutImg.png";

// About highlights
const highlights = [
  {
    id: 1,
    icon: "🏥",
    title: "Modern Facilities",
    description:
      "We provide quality healthcare with modern medical facilities and equipment.",
  },
  {
    id: 2,
    icon: "👨‍⚕️",
    title: "Experienced Doctors",
    description:
      "Our experienced medical professionals are committed to your well-being.",
  },
  {
    id: 3,
    icon: "❤️",
    title: "Patient-Centered Care",
    description:
      "Every patient receives personalized attention and compassionate care.",
  },
  {
    id: 4,
    icon: "🩺",
    title: "Complete Healthcare",
    description:
      "We offer multiple healthcare services under one roof.",
  },
];

// Mission and Vision
const values = [
  {
    id: 1,
    icon: "🎯",
    title: "Our Mission",
    description:
      "To provide accessible, affordable and quality healthcare through compassionate service, medical expertise and patient-focused care.",
  },
  {
    id: 2,
    icon: "🌟",
    title: "Our Vision",
    description:
      "To become a trusted healthcare destination where every individual receives the care, support and attention they deserve.",
  },
];

// Achievements
const achievements = [
  { id: 1, number: "10+", label: "Years of Experience" },
  { id: 2, number: "15+", label: "Expert Doctors" },
  { id: 3, number: "2K+", label: "Happy Patients" },
  { id: 4, number: "10+", label: "Medical Services" },
];

export function About() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-teal-50 px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          <div>
            <p className="text-teal-700 font-semibold tracking-wider mb-3">
              ABOUT MEDICARE
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Caring For You, <span className="text-teal-700">Every Step</span> Of The Way
            </h1>

            <p className="text-gray-600 leading-relaxed mb-8">
              At MediCare, we believe that good health is the foundation
              of a happy life. Our goal is to provide quality healthcare
              with compassion, trust and dedication.
            </p>

            <Link
              to="/contact-us"
              className="inline-block bg-teal-700 hover:bg-teal-800 text-white px-7 py-3 rounded-lg font-semibold transition"
            >
              Contact Us →
            </Link>
          </div>

          <div className="relative">
            <img
              src={aboutImg}
              alt="MediCare healthcare professional"
              className="w-150 h-[350px] md:h-[430px] object-cover object-top rounded-3xl shadow-lg"
            />

            <div className="absolute -bottom-5 -left-4 md:-left-6 bg-white shadow-lg rounded-xl p-5">
              <p className="text-3xl font-bold text-teal-700">10+</p>
              <p className="text-gray-600 text-sm">Years of Healthcare</p>
            </div>
          </div>

        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-teal-700 font-semibold tracking-wider mb-3">
            WHO WE ARE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Health Is Our Greatest Priority
          </h2>

          <p className="text-gray-600 leading-8">
            MediCare is a healthcare clinic dedicated to providing
            comprehensive medical care for individuals and families.
            We focus on understanding every patient's needs and
            delivering personalized healthcare in a comfortable
            and welcoming environment.
          </p>

          <p className="text-gray-600 leading-8 mt-4">
            From preventive healthcare to specialized consultations,
            our team works together to make your healthcare experience
            simple, comfortable and reliable.
          </p>

        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-teal-700 font-semibold tracking-wider mb-3">
              OUR PURPOSE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {values.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-5">{item.icon}</div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <p className="text-teal-700 font-semibold tracking-wider mb-3">
            WHY MEDICARE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            We are committed to making quality healthcare accessible
            through trust, experience and compassionate service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {highlights.map((item) => (
            <div
              key={item.id}
              className="border border-gray-100 rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="text-4xl mb-5">{item.icon}</div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Achievements */}
      <section className="bg-teal-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-teal-200 font-semibold tracking-wider mb-3">
              OUR ACHIEVEMENTS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Making A Difference Every Day
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {achievements.map((item) => (
              <div key={item.id} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {item.number}
                </h3>

                <p className="text-teal-100 text-sm md:text-base">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-teal-50 rounded-3xl p-8 md:p-14 text-center">

          <p className="text-teal-700 font-semibold tracking-wider mb-3">
            WE ARE HERE FOR YOU
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Your Health Journey Starts Here
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Get in touch with our team and take the next step
            towards better healthcare.
          </p>

          <Link
            to="/contact-us"
            className="inline-block bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Contact Our Team →
          </Link>

        </div>
      </section>

    </div>
  );
}
