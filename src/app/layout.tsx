import type { Metadata, Viewport } from "next";
import { Libre_Baskerville } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const libreBaskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export const viewport: Viewport = {
    themeColor: '#211C6A',
}

export const metadata: Metadata = {
    title: "Thiago Lopes - desenvolvedor full-stack senior",
    description: "Bacharelado em Ciência da Computação (2007-2010), há mais de 15 anos como desenvolvedor no mercado nacional e internacional.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return (
        <html lang="pt-BR" style={{ scrollBehavior:'smooth' }}>
            <head>
                <link rel="dns-prefetch" href="//www.googletagmanager.com" />
                <meta name="google-site-verification" content="ILUVWvEyhMsOoD-cQfgAHlgykKS740ZYeRittckgQ7w" />
            </head>
            <body className={ libreBaskerville.className }>
                <main className="relative z-20">
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
            <GoogleAnalytics gaId="G-CTF9HH11NZ" />
        </html>
    );
}
