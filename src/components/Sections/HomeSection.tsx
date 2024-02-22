'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../Button";
import { FiChevronDown, FiDownload } from "react-icons/fi";
import { cardVariants } from "@/app/utils";
import SocialLinks from "../SocialLinks";
import Title from "../Title";

export default function HomeSection()
{
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: .2 }}
        >
            <section id="inicio" className="flex flex-col lg:flex-row relative z-20 h-screen">
                <div className="flex bg-developes-primary h-1/2 lg:w-1/2 lg:h-screen items-center order-2 lg:order-1">
                    <motion.div className="flex flex-col px-8 lg:px-12 xl:px-36 py-4" variants={ cardVariants }>
                        <Title
                            anchor="inicio"
                            title="Thiago Lopes"
                            subtitle="desenvolvedor full-stack senior"
                            text="Bacharelado em Ciência da Computação (2007-2010), há mais de 15 anos como desenvolvedor no mercado nacional e internacional."
                            primary
                        />
                        <div className="flex flex-col md:flex-row mt-4 md:mt-10 space-y-4 md:space-y-0 md:space-x-10 items-center">
                            <div className="flex">
                                <Button
                                    href="/download/cv-thiago-lopes-2024.pdf"
                                    target="_blank"
                                    event={{ event: "click_curriculum" }}
                                >
                                    <div className="flex space-x-2 items-center md:p-2">
                                        <FiDownload className="w-5 h-5 md:w-6 md:h-6 text-current" />
                                        <span className="md:text-xl">curriculum</span>
                                    </div>
                                </Button>
                            </div>
                            <div className="flex space-x-10">
                                <SocialLinks position="home" />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="flex bg-developes-creme h-1/2 xl:w-1/2 lg:h-screen order-1 lg:order-2">
                    <div className="w-full h-full lg:fixed lg:w-1/2">
                        <Image
                            src="/images/thiago-lopes.jpg"
                            alt="Thiago Lopes"
                            width={ 980 }
                            height={ 980 }
                            className="object-cover object-center w-full h-full"
                        />
                    </div>
                </div>
                <div className="absolute bottom-2 w-full px-4 flex flex-col items-end lg:items-center -space-y-7 lg:-space-y-10 bounce">
                    <FiChevronDown className="w-10 h-10 lg:w-14 lg:h-14 text-developes-creme" />
                    <FiChevronDown className="w-10 h-10 lg:w-14 lg:h-14 text-developes-creme" />
                </div>
            </section>
        </motion.div>
    ); 
}
  