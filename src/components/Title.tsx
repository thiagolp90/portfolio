import Link from "next/link";

interface TitleProps {
    anchor: string
    title: string
    subtitle?: string
    text?: string
    primary?: boolean
}

export default function Title({ anchor, title, subtitle, text, primary = false }: TitleProps)
{
    return (
        <div className="space-y-2 md:space-y-4">
            <div className="flex flex-col space-y-2 md:space-y-4">
                { subtitle && <span className="text-sm md:text-base text-developes-info">{ subtitle }</span> }
                { primary
                    ? <h1 className="text-2xl md:text-5xl xl:text-7xl text-developes-creme"><Link href={ `#${ anchor }` } className="text-developes-success">#</Link> { title }</h1>
                    : <h2 className="text-2xl md:text-5xl xl:text-7xl text-developes-creme"><Link href={ `#${ anchor }` } className="text-developes-success">#</Link> { title }</h2>
                }
            </div>
            { text && <p className="text-md md:text-xl xl:text-2xl text-developes-creme">{ text }</p> }
        </div>
    );
}