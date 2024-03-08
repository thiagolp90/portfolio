'use client'

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { motion, useScroll } from "framer-motion";
import { whatsappUrl } from "@/app/[lang]/utils";

export default function Header({ dict }: any)
{
    const ref = useRef<HTMLDivElement>(null);
    const [openMenu, setOpenMenu] = useState(false)
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpenMenu(false)
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleMenuClick = () => {
        setOpenMenu(!openMenu)
    }

    const handleLinkClick = () => {
        setOpenMenu(false)
    }

    return (
        <div ref={ref}>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <header className="fixed w-[114px] z-50 flex justify-between p-10">
                <button className="relative z-50 space-y-2" onClick={handleMenuClick}>
                    <span 
                        className={
                            (openMenu ? "rotate-45 translate-y-3" : "") +
                            " flex w-9 h-1 bg-developes-creme transition-all duration-300 rounded"
                        }
                    ></span>
                    <span 
                        className={
                            (openMenu ? "opacity-0" : "") +
                            " flex w-7 h-1 bg-developes-creme transition-all duration-300 rounded"
                        }
                    ></span>
                    <span 
                        className={
                            (openMenu ? "-rotate-45 -translate-y-3" : "") +
                            " flex w-9 h-1 bg-developes-creme transition-all duration-300 rounded"
                        }
                    ></span>
                    <span className="sr-only">Menu</span>
                </button>
            </header>
            <nav
                className={
                    (openMenu ? "left-0" : "left-[-450px]") +
                    " fixed z-40 bg-developes-primary-dark/90 w-full max-w-[450px] h-screen transition-all duration-300 flex flex-col justify-between p-10"
                }
            >
                <div></div>
                <div className="items-center">
                    <ul className="space-y-4 lg:space-y-6">
                        <li>
                            <Link href={ `#${dict.home.anchor}` } className="text-developes-creme text-xl lg:text-3xl transition-all duration-300" onClick={handleLinkClick}>{ dict.header.home }</Link>
                        </li>
                        <li>
                            <Link href={ `#${dict.skills.anchor}` } className="text-developes-creme text-xl lg:text-3xl transition-all duration-300" onClick={handleLinkClick}>{ dict.header.skills }</Link>
                        </li>
                        <li>
                            <Link href={ `#${dict.services.anchor}` } className="text-developes-creme text-xl lg:text-3xl transition-all duration-300" onClick={handleLinkClick}>{ dict.header.services }</Link>
                        </li>
                        <li>
                            <Link href={ `#${dict.portfolio.anchor}` } className="text-developes-creme text-xl lg:text-3xl transition-all duration-300" onClick={handleLinkClick}>{ dict.header.portfolio }</Link>
                        </li>
                        <li>
                            <Link href={ `#${dict.contact.anchor}` } className="text-developes-creme text-xl lg:text-3xl transition-all duration-300" onClick={handleLinkClick}>{ dict.header.contact }</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Button 
                        href={ whatsappUrl }
                        target="_blank"
                        event={{ event: "click", value: "whatsapp_header" }}
                        full
                    >
                        <div className="flex space-x-2 items-center md:p-2">
                            <BsWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-current" />
                            <span className="md:text-xl">{ dict.header.button }</span>
                        </div>
                    </Button>
                </div>
            </nav>
        </div>
    );
  }
  