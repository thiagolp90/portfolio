import Image from "next/image";
import Link from "next/link";

export interface PortfolioCardProps {
    href: string
    title: string
    image: string
}

export default function PortfolioCard({ portfolio }: { portfolio: PortfolioCardProps })
{
    return (
        <article className="text-center hover:-mt-2 transition-all duration-300">
            <Link href={ portfolio.href } target="_blank" className="flex">
                <Image
                    src={ portfolio.image }
                    alt={ portfolio.title }
                    width={ 350 }
                    height={ 350 }
                    className="flex object-contain w-full rounded-xl shadow-xl"
                />
            </Link>
        </article>
    ); 
}
  