'use client'

import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import Button from "../Button";
import { cardVariants, whatsappUrl } from "@/app/[lang]/utils";
import Title from "../Title";
import Section from "../Section";

export default function ContactSection({ dict }: any)
{
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: .2 }}
        >
            <Section id={ dict.anchor }>
                <div className="flex items-center w-full">
                    <motion.div className="flex flex-col space-y-4 w-10/12 max-w-[1080px] mx-auto" variants={ cardVariants }>
                        <div className="text-center">
                            <Title
                                anchor={ dict.anchor }
                                title={ dict.title }
                                text={ dict.description }
                            />
                        </div>
                        <div className="flex justify-center py-10">
                            <Button
                                href={ whatsappUrl }
                                target="_blank"
                                event={{ event: "click", value: "whatsapp_contact" }}
                                full
                            >
                                <div className="flex space-x-2 items-center md:p-2">
                                    <BsWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-current" />
                                    <span className="md:text-xl">{ dict.button }</span>
                                </div>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </motion.div>
    ); 
}