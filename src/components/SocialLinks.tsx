'use client'

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { githubUrl, linkedinUrl, whatsappUrl } from "@/app/[lang]/utils";
import Link from "next/link";
import { IconType } from "react-icons";
import { sendGAEvent } from "@next/third-parties/google";

interface SocialLinkProps {
    title: string
    href: string
    icon: IconType
}

function SocialLink({ link, position } : { link: SocialLinkProps, position: string })
{
    return (
        <Link 
            href={ link.href }
            target="_blank"
            prefetch={false}
            onClick={() => sendGAEvent({ event: "click", value: `${link.title.toLowerCase()}_${position}` })}
        >
            <span className="sr-only">{ link.title }</span>
            <link.icon className="w-6 h-6 text-developes-creme hover:text-developes-success transition-all duration-300" />
        </Link>
    ); 
}

export default function SocialLinks({ position }: { position: string })
{
    const socialLinks = [
        { title: "Linkedin", href: linkedinUrl, icon: FiLinkedin },
        { title: "Github", href: githubUrl, icon: FiGithub },
        { title: "Whatsapp", href: whatsappUrl, icon: BsWhatsapp },
    ]

    return (
        socialLinks.length > 0 && socialLinks.map((socialLink: SocialLinkProps, i: number) => (
            <SocialLink key={ i } link={ socialLink } position={ position } />
        ))
    ); 
}