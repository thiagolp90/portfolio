'use client'

import { cardVariants } from "@/app/[lang]/utils";
import { motion } from "framer-motion";
import Title from "../Title";
import Section from "../Section";
import ServiceCard, { ServiceCardProps } from "../Cards/ServiceCard";
import { FiCloud, FiCode, FiGlobe, FiMonitor, FiShoppingCart, FiSmartphone } from "react-icons/fi";

export default function ServicesSection({ dict }: any)
{
    const services = [
        { icon: FiCode, title: dict.service_1, description: "" },
        { icon: FiGlobe, title: dict.service_2, description: "" },
        { icon: FiShoppingCart, title: dict.service_3, description: "" },
        { icon: FiCloud, title: dict.service_4, description: "" },
        { icon: FiMonitor, title: dict.service_5, description: "" },
        { icon: FiSmartphone, title: dict.service_6, description: "" },
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
                        { services.map((service: ServiceCardProps, i: number) => <ServiceCard key={ i } service={ service } /> )}
                    </div>
                </motion.div>
            </Section>
      </motion.div>
    ); 
}