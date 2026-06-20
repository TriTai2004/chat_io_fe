import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaComments } from "react-icons/fa";
import Button from "../../../shared/components/Button/button-base";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../auth/selectors";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
];

const Navbar = () => {

    const isAuthenticated = useSelector(selectIsAuthenticated);



    const [isOpen, setIsOpen] = useState(false);



    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center gap-3 text-white">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 text-white shadow-lg shadow-sky-500/25">
                        <FaComments className="h-5 w-5" />
                    </span>
                    <span className="text-xl font-semibold tracking-tight">Chatio</span>
                </Link>

                <nav className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 transition hover:text-white"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <Button as={Link} to="/chat" variant="glass" size="sm">
                        Start Chatting
                    </Button>
                    {!isAuthenticated && (
                        <>
                            <Button as={Link} to="/login" variant="ghost" size="sm">
                                Login
                            </Button>
                            <Button as={Link} to="/login" variant="primary" size="sm" shape="pill">
                                Sign Up
                            </Button>
                        </>
                    )}
                </div>

                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
                    onClick={() => setIsOpen((current) => !current)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isOpen ? (
                <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-5 pt-2 backdrop-blur-xl lg:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}

                        <div className="grid grid-cols-1 gap-3 pt-2">
                            <Button as={Link} to="/chat" variant="glass" size="md" fullWidth>
                                Chat Demo
                            </Button>
                            <Button as={Link} to="/login" variant="ghost" size="md" fullWidth>
                                Login
                            </Button>
                            <Button as={Link} to="/login" variant="primary" size="md" fullWidth>
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            ) : null}
        </header>
    );
};

export default Navbar;
