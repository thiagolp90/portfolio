interface SectionProps {
    id: string
    children: React.ReactNode
}

export default function Section({ id, children }: SectionProps)
{
    return (
        <section id={ id } className="flex relative z-20 bg-developes-primary w-full min-h-screen justify-center py-36">
            { children }
        </section>
    );
}