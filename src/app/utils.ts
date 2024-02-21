import { Variants } from "framer-motion";

const linkedinUrl  = "https://www.linkedin.com/in/thiagolp90/"
const githubUrl    = "https://github.com/thiagolp90"
const whatsappUrl  = "https://api.whatsapp.com/send?phone=5562984559194&text="

const cardVariants: Variants = {
    offscreen: {
        y: 300,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
};

export { cardVariants, linkedinUrl, githubUrl, whatsappUrl }