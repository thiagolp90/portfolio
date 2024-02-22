'use client'

import Link from "next/link";
import { sendGAEvent } from '@next/third-parties/google'

interface ButtonProps {
    href: string
    children: React.ReactNode
    full?: boolean
    target?: string
    download?: boolean
    event?: object|null
}

export default function Button({ href, children, full = false, target, download, event = null }: ButtonProps)
{
    const handleClick = () => {
        if(event){
            sendGAEvent(event)
        }
    }

    return (
        <Link 
            href={ href } 
            className={
                (full ? "flex justify-center" : "") +
                " bg-developes-creme rounded-xl px-8 py-2 font-bold text-developes-primary transition-all duration-300 hover:bg-developes-success hover:text-developes-creme hover:shadow-squared"
            }
            target={ target }
            download={ download }
            prefetch={false}
            onClick={() => { handleClick() }}
        >
            { children }
        </Link>
    ); 
}
  