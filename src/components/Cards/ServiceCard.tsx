import { IconType } from "react-icons";

export interface ServiceCardProps {
    icon: IconType
    title: string
    description: string
}

export default function ServiceCard({ service }: { service: ServiceCardProps })
{
    return (
        <article className="text-center hover:-mt-2 transition-all duration-300">
            <div className="bg-developes-creme text-developes-primary py-8 px-6 rounded-xl shadow-xl">
                <service.icon className="w-14 h-14 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{ service.title }</h3>
                <p className="text-lg">{ service.description }</p>
            </div>
        </article>
    ); 
}
  