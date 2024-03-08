'use client'

import { cardVariants } from "@/app/[lang]/utils";
import { motion } from "framer-motion";
import Title from "../Title";
import Section from "../Section";
import Skill, { SkillProps } from "../Skill";

export default function AboutSection({ dict }: any)
{
    const skills = [
        // {title: "HTML", experience: `15 ${dict.years}`, width: "w-full"},
        // {title: "CSS", experience: `15 ${dict.years}`, width: "w-full"},
        {title: "Javascript", experience: `15 ${dict.years}`, width: "w-full"},
        {title: "PHP", experience: `14 ${dict.years}`, width: "w-11/12"},
        // {title: "Wordpress", experience: `12 ${dict.years}`, width: "w-10/12"},
        // {title: "jQuery", experience: `12 ${dict.years}`, width: "w-10/12"},
        // {title: "Bootstrap", experience: `10 ${dict.years}`, width: "w-9/12"},
        {title: "Laravel", experience: `6 ${dict.years}`, width: "w-7/12"},
        {title: "Tailwind", experience: `4 ${dict.years}`, width: "w-5/12"},
        {title: "React JS", experience: `4 ${dict.years}`, width: "w-5/12"},
        {title: "React Native", experience: `3 ${dict.years}`, width: "w-4/12"},
        {title: "Next JS", experience: `2 ${dict.years}`, width: "w-3/12"},
    ]
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: .2 }}
        >
            <Section id={ dict.anchor }>
                <motion.div className="flex flex-col space-y-4 w-10/12 max-w-[1080px] mx-auto" variants={ cardVariants }>
                    <div className="text-center">
                        <Title
                            anchor={ dict.anchor }
                            title={ dict.skills }
                            text=""
                        />
                    </div>
                    <div className="pt-10 space-y-4 max-w-2xl w-full mx-auto">
                        {skills.map((skill: SkillProps, i: number) => <Skill key={ i } skill={ skill } /> )}
                    </div>
                </motion.div>
            </Section>
      </motion.div>
    ); 
}