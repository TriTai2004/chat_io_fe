import { Link } from "react-router-dom";
import {
    FaComments,
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <Link to="/" className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 text-white shadow-lg shadow-sky-500/20">
                            <FaComments className="h-5 w-5" />
                        </span>
                        <span className="text-xl font-semibold tracking-tight">Chatio</span>
                    </Link>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                        A modern chat platform built for communities, teams, and product-grade
                        collaboration.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                    {["About", "Contact", "Privacy Policy", "Terms"].map((item) => (
                        <a key={item} href="/" className="transition hover:text-white">
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {[
                        FaTwitter,
                        FaFacebookF,
                        FaInstagram,
                        FaLinkedinIn,
                        FaGithub,
                    ].map((Icon, index) => (
                        <a
                            key={index}
                            href="/"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-sky-300/30 hover:bg-white/10 hover:text-white"
                            aria-label="Social media"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
