import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import OnlineUsersSection from "../../components/OnlineUsersSection";
import PublicRoomsSection from "../../components/PublicRoomsSection";
import PremiumBanner from "../../components/PremiumBanner";
import TestimonialSection from "../../components/TestimonialSection";
import StatisticsSection from "../../components/StatisticsSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";

const HomePage = () => {

    

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <OnlineUsersSection />
            <PublicRoomsSection />
            <PremiumBanner />
            <TestimonialSection />
            <StatisticsSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default HomePage;
