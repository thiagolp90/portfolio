'use client'

import ParallaxText from "../ParallaxText";

export default function Parallax2Section()
{
    return (
        <section className="flex flex-col relative z-20 bg-developes-primary w-full text-developes-primary-dark">
            <ParallaxText baseVelocity={-1}>rest api soap websocket webhook graphql</ParallaxText>
            <ParallaxText baseVelocity={1}>react native expo electron</ParallaxText>
        </section>
    ); 
}