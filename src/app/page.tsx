import HomeSection from "@/components/Sections/HomeSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import ContactSection from "@/components/Sections/ContactSection";
import Parallax1Section from "@/components/Sections/Parallax1Section";
import ServicesSection from "@/components/Sections/ServicesSection";
import Parallax2Section from "@/components/Sections/Parallax2Section";
import PortfolioSection from "@/components/Sections/PortfolioSection";
import Parallax3Section from "@/components/Sections/Parallax3Section";

export default function Home()
{
    return (
        <main className="flex flex-col">
            <HomeSection />
            <SkillsSection />
            <Parallax1Section />
            <ServicesSection />
            <Parallax2Section />
            <PortfolioSection />
            <Parallax3Section />
            <ContactSection />
        </main>
    );
}