import { Nextdotjs, Notion, Vercel } from "@icons-pack/react-simple-icons";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-xs text-center p-6 primary-text">
            <div className="space-x-2 inline-flex items-center my-2">
                <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">
                    <Notion size={16} />
                </a>
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                    <Nextdotjs size={16} />
                </a>
                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                    <Vercel size={16} />
                </a>
            </div>
            <div>
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">
                    CC BY-NC-SA 4.0
                </a>
                &ensp;{currentYear} &copy; Jaywhen 
            </div>
        </footer>
    );
}

export default Footer;
