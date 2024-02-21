import Link from "next/link";

interface ButtonProps {
    href: string
    children: React.ReactNode
    full?: boolean
    target?: string
    download?: boolean
}

export default function Button({ href, children, full = false, target, download }: ButtonProps)
{
    return (
        <Link 
            href={ href } 
            className={
                (full ? "flex justify-center" : "") +
                " bg-developes-creme rounded-xl px-8 py-2 font-bold text-developes-primary transition-all duration-300 hover:bg-developes-success hover:text-developes-creme hover:shadow-squared"
            }
            target={ target }
            download={ download }
        >
            { children }
        </Link>
    ); 
}
  