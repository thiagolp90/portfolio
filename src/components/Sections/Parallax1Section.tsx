'use client'

import ParallaxText from "../ParallaxText";

export default function Parallax1Section()
{
    return (
        <section className="flex flex-col relative z-20 bg-developes-primary w-full text-developes-primary-dark">
            <ParallaxText baseVelocity={-1}>php laravel mysql</ParallaxText>
            <ParallaxText baseVelocity={1}>next react js tailwind css bootstrap jquery</ParallaxText>
        </section>
    ); 
}