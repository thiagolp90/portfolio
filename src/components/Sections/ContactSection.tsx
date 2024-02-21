'use client'

import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import Button from "../Button";
import { cardVariants, whatsappUrl } from "@/app/utils";
import Title from "../Title";
import Section from "../Section";

export default function ContactSection()
{
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: .2 }}
        >
            <Section id="contato">
                <div className="flex items-center">
                    <motion.div className="flex flex-col space-y-4 w-10/12 max-w-[1080px] mx-auto" variants={ cardVariants }>
                        <div className="text-center">
                            <Title
                                anchor="contato"
                                title="Contato"
                                text="Ficou interessado e gostaria de um orçamento? Quem sabe uma parceiria? Me envie uma mensagem, basta clicar no botão abaixo:"
                            />
                        </div>
                        <div className="flex justify-center py-10">
                            <Button href={ whatsappUrl } target="_blank" full>
                                <div className="flex space-x-2 items-center md:p-2">
                                    <BsWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-current" />
                                    <span className="md:text-xl">enviar mensagem</span>
                                </div>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </motion.div>
    ); 
}