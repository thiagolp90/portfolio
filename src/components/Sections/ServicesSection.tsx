'use client'

import { cardVariants } from "@/app/utils";
import { motion } from "framer-motion";
import Title from "../Title";
import Section from "../Section";
import ServiceCard, { ServiceCardProps } from "../Cards/ServiceCard";
import { FiCloud, FiCode, FiGlobe, FiMonitor, FiShoppingCart, FiSmartphone } from "react-icons/fi";

export default function ServicesSection()
{
    const services = [
        { icon: FiCode, title: "Landing pages", description: "" },
        { icon: FiGlobe, title: "Sites institucionais", description: "" },
        { icon: FiShoppingCart, title: "E-commerces", description: "" },
        { icon: FiCloud, title: "Sistemas web", description: "" },
        { icon: FiMonitor, title: "Sistemas desktop", description: "" },
        { icon: FiSmartphone, title: "Aplicativos Mobile", description: "" },
    ]

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: .2 }}
        >
            <Section id="servicos">
                <motion.div className="flex flex-col space-y-4 w-10/12 max-w-[1080px] mx-auto" variants={ cardVariants }>
                    <div className="text-center">
                        <Title
                            anchor="servicos"
                            title="Serviços"
                            text="Está precisando de algo? Talvez eu possa te ajudar nisso aqui:"
                        />
                    </div>
                    <div className="pt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                        { services.map((service: ServiceCardProps, i: number) => <ServiceCard key={ i } service={ service } /> )}
                    </div>
                </motion.div>
            </Section>
      </motion.div>
    ); 
}