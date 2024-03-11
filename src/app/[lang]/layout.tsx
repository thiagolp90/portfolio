import type { Metadata, Viewport } from "next";
import { Libre_Baskerville } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "./dictionaries";

const libreBaskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export const viewport: Viewport = {
    themeColor: '#211C6A',
}

export async function generateMetadata({ 
    params: { lang } 
}: {
    params: { lang: 'pt' | 'en' | 'fr' }
}): Promise<Metadata>
{
    const dict = await getDictionary(lang) as any
   
    return {
        title: `Thiago Lopes - ${dict.home.role}`,
        description: dict.home.description,
        verification: {
            google: "cQfgAHlgykKS740ZYeRittckgQ7w"
        }
    }
}

export default async function RootLayout({
    children,
    params: { lang }
}: Readonly<{
    children: React.ReactNode
    params: { lang: 'pt' | 'en' | 'fr' }
}>)
{
    const dict = await getDictionary(lang) as any

    return (
        <html lang={ lang } style={{ scrollBehavior: 'smooth' }}>
            <head>
                <link rel="dns-prefetch" href="//www.googletagmanager.com" />
            </head>
            <body className={ libreBaskerville.className }>
                <main className="relative z-20">
                    <Header dict={ dict } />
                    {children}
                    <Footer />
                </main>
            </body>
            <GoogleAnalytics gaId="G-CTF9HH11NZ" />
        </html>
    );
}
