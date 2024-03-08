'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../Button";
import { FiChevronDown, FiDownload } from "react-icons/fi";
import { cardVariants } from "@/app/[lang]/utils";
import SocialLinks from "../SocialLinks";
import Title from "../Title";
import Link from "next/link";

export default function HomeSection({ dict, lang }: { dict: any, lang: "pt" | "en" | "fr"})
{
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: .2 }}
        >
            <section id={ dict.anchor } className="flex flex-col lg:flex-row relative z-20 h-screen">
                <div className="flex bg-developes-primary h-1/2 lg:w-1/2 lg:h-screen items-center order-2 lg:order-1">
                    <motion.div className="flex flex-col px-8 lg:px-12 xl:px-36 py-4" variants={ cardVariants }>
                        <Title
                            anchor={ dict.anchor }
                            title="Thiago Lopes"
                            subtitle={ dict.role }
                            text={ dict.description }
                            primary
                        />
                        <div className="flex flex-col md:flex-row mt-4 md:mt-10 space-y-4 md:space-y-0 md:space-x-10 items-center">
                            <div className="flex">
                                <Button
                                    href={ dict.curriculum }
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
                            src="/_static/thiago-lopes.jpg"
                            alt="Thiago Lopes"
                            width={ 980 }
                            height={ 980 }
                            className="object-cover object-center w-full h-full"
                        />
                        <div className="absolute flex space-x-4 z-10 top-10 right-10">
                            {lang != "pt" && (
                                <Link href="/pt">
                                    <Image
                                        src="/_static/br.svg"
                                        alt="Português"
                                        width={ 32 }
                                        height={ 32 }
                                    />
                                </Link>
                            )}
                            {lang != "en" && (
                                <Link href="/en">
                                    <Image
                                        src="/_static/us.svg"
                                        alt="English"
                                        width={ 32 }
                                        height={ 32 }
                                    />
                                </Link>
                            )}
                            {lang != "fr" && (
                                <Link href="/fr">
                                    <Image
                                        src="/_static/fr.svg"
                                        alt="Français"
                                        width={ 32 }
                                        height={ 32 }
                                    />
                                </Link>
                            )}
                        </div>
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
  