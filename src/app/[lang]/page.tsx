import HomeSection from "@/components/Sections/HomeSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import ContactSection from "@/components/Sections/ContactSection";
import Parallax1Section from "@/components/Sections/Parallax1Section";
import ServicesSection from "@/components/Sections/ServicesSection";
import Parallax2Section from "@/components/Sections/Parallax2Section";
import PortfolioSection from "@/components/Sections/PortfolioSection";
import Parallax3Section from "@/components/Sections/Parallax3Section";
import { getDictionary } from './dictionaries'

export default async function Page({ params: { lang } }: { params: { lang: 'pt' | 'en' | 'fr' }})
{
    const dict = await getDictionary(lang) as any

    return (
        <main className="flex flex-col">
            <HomeSection dict={ dict.home } lang={ lang } />
            <SkillsSection dict={ dict.skills } />
            <Parallax1Section />
            <ServicesSection dict={ dict.services } />
            <Parallax2Section />
            <PortfolioSection dict={ dict.portfolio } />
            <Parallax3Section />
            <ContactSection dict={ dict.contact } />
        </main>
    );
}