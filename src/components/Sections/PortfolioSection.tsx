'use client'

import { cardVariants } from "@/app/[lang]/utils";
import { motion } from "framer-motion";
import Title from "../Title";
import Section from "../Section";
import PortfolioCard, { PortfolioCardProps } from "../Cards/PortfolioCard";

export default function PortfolioSection({ dict }: any)
{
    const portfolios = [
        // { href: 'https://www.edunlock.com/', title: 'Edunlock', image: "/_static/portfolio-1.jpg" },
        { href: 'https://www.facultejeancalvin.com/', title: 'Faculté Jean Calvin', image: "/_static/portfolio-2.jpg" },
        { href: 'https://jedonneaudenier.org/', title: 'Le Denier de l\'Église Catholique', image: "/_static/portfolio-3.jpg" },
        { href: 'https://catholique-reims.fr/', title: 'L\'Église Catholique à Reims et dans les Ardennes', image: "/_static/portfolio-4.jpg" },
        { href: 'https://montagnesdesvosges.fr/', title: 'Magazine Montagnes des Vosges', image: "/_static/portfolio-5.jpg" },
        { href: 'https://www.concretal.com.br/', title: 'Concretal Engenharia', image: "/_static/portfolio-6.jpg" },
        { href: 'https://www.grupomariza.com.br/', title: 'Grupo Mariza', image: "/_static/portfolio-7.jpg" },
    ]

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: .2 }}
        >
            <Section id={ dict.anchor }>
                <motion.div className="flex flex-col space-y-4 w-10/12 max-w-[1080px] mx-auto" variants={ cardVariants }>
                    <div className="text-center">
                        <Title
                            anchor={ dict.anchor }
                            title={ dict.title }
                            text={ dict.description }
                        />
                    </div>
                    <div className="pt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                        { portfolios.map((portfolio: PortfolioCardProps, i: number) => <PortfolioCard key={ i } portfolio={ portfolio } /> )}
                    </div>
                </motion.div>
            </Section>
      </motion.div>
    ); 
}