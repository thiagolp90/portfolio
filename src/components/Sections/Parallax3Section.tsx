'use client'

import ParallaxText from "../ParallaxText";

export default function Parallax3Section()
{
    return (
        <section className="flex flex-col relative z-20 bg-developes-primary w-full text-developes-primary-dark">
            <ParallaxText baseVelocity={-1}>photoshop illustrator figma</ParallaxText>
            <ParallaxText baseVelocity={1}>woocommerce rd station magento wordpress</ParallaxText>
        </section>
    ); 
}