import SocialLinks from "./SocialLinks";

export default function Footer()
{
    return (
        <footer className="relative z-20 p-10 bg-developes-primary-dark flex space-x-8 justify-center">
            <SocialLinks position="footer" />
        </footer>
    );
}