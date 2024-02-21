'use client'

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { motion, useScroll } from "framer-motion";
import { whatsappUrl } from "@/app/utils";

export default function Header()
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
                    <span className="sr-only">Menu</span>
                    <span 
                        className={
                            (openMenu ? "rotate-45 translate-y-3" : "") +
                            " flex w-9 h-1 bg-developes-creme transition-all duration-300"
                        }
                    ></span>
                    <span 
                        className={
                            (openMenu ? "opacity-0" : "") +
                            " flex w-7 h-1 bg-developes-creme transition-all duration-300"
                        }
                    ></span>
                    <span 
                        className={
                            (openMenu ? "-rotate-45 -translate-y-3" : "") +
                            " flex w-9 h-1 bg-developes-creme transition-all duration-300"
                        }
                    ></span>
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
                            <Link href="#inicio" className="text-developes-creme text-xl lg:text-3xl transition-all duration-300" onClick={handleLinkClick}>Início</Link>
                        </li>
                        <li>
                            <Link href="#habilidades" className="text-developes-creme text-xl lg:text-3xl transition-all duration-300" onClick={handleLinkClick}>Habilidades</Link>
                        </li>
                        <li>
                            <Link href="#servicos" className="text-developes-creme text-xl lg:text-3xl transition-all duration-300" onClick={handleLinkClick}>Serviços</Link>
                        </li>
                        <li>
                            <Link href="#portfolio" className="text-developes-creme text-xl lg:text-3xl transition-all duration-300" onClick={handleLinkClick}>Portfólio</Link>
                        </li>
                        <li>
                            <Link href="#contato" className="text-developes-creme text-xl lg:text-3xl transition-all duration-300" onClick={handleLinkClick}>Contato</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Button href={ whatsappUrl } target="_blank" full>
                        <div className="flex space-x-2 items-center md:p-2">
                            <BsWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-current" />
                            <span className="md:text-xl">enviar mensagem</span>
                        </div>
                    </Button>
                </div>
            </nav>
        </div>
    );
  }
  