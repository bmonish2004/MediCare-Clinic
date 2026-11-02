import Hero from "../../components/Home/Hero";
import ServicesSection from "../../components/Home/ServicesSection";
import AboutSection from "../../components/Home/AboutSection";
import DoctorsSection from "../../components/Home/DoctorsSection";
import TestimonialsSection from "../../components/Home/TestimonialsSection";

export function Home() {
    return (
        <>
            <div>
                <Hero />
                <ServicesSection />
                <AboutSection />
                <DoctorsSection />
                <TestimonialsSection />
            </div>
        </>
    )
}