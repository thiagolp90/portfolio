export interface SkillProps {
    title: string
    experience: string
    width: string
}

export default function Skill({ skill }: { skill: SkillProps })
{
    return (
        <div className="flex space-x-4 items-center">
            <h3 className="text-md md:text-xl w-44 text-developes-creme">{ skill.title }</h3>
            <div className="bg-developes-creme w-full rounded-md overflow-hidden">
                <div className={ `${skill.width} bg-developes-success px-4 py-2 rounded-l-md text-developes-primary font-bold text-nowrap` }>{ skill.experience }</div>
            </div>
        </div>
    );
}