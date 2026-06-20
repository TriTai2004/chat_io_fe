import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay, FaComments, FaCircle } from "react-icons/fa";
import Button from "../../../shared/components/Button/button-base";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-slate-950 px-4 pb-16 pt-12 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-16"
        >
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
                <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
                        <FaCircle className="h-2 w-2 text-emerald-400" />
                        Realtime messaging for modern teams
                    </div>

                    <div className="space-y-6">
                        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                            Connect, Chat and Collaborate Instantly
                        </h1>
                        <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                            Chatio brings your communities, conversations, and collaboration into
                            one elegant workspace with realtime chat, smooth calls, and secure
                            access built for modern product teams.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button as={Link} to="/chat" variant="primary" size="lg">
                            Start Chatting
                            <FaArrowRight />
                        </Button>
                        <Button as={Link} to="#features" variant="glass" size="lg">
                            <FaPlay />
                            Learn More
                        </Button>
                    </div>

                    <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
                        {[
                            ["99.9%", "Uptime"],
                            ["5M+", "Messages sent"],
                            ["20K+", "Communities"],
                        ].map(([value, label]) => (
                            <div
                                key={label}
                                className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                            >
                                <div className="text-2xl font-semibold text-white">{value}</div>
                                <div className="mt-1 text-sm text-slate-300">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -left-6 top-8 h-24 w-24 rounded-3xl bg-sky-500/25 blur-2xl" />
                    <div className="absolute -right-6 bottom-6 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl sm:p-6">
                        <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-4 sm:p-6">
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <div>
                                    <div className="text-sm font-medium text-white">Team Inbox</div>
                                    <div className="text-xs text-slate-400">
                                        12 members online right now
                                    </div>
                                </div>
                                <div className="flex -space-x-2">
                                    {["A", "B", "C", "D"].map((item) => (
                                        <div
                                            key={item}
                                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900 bg-gradient-to-br from-sky-400 to-cyan-500 text-xs font-semibold text-white"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-5 space-y-4">
                                <div className="max-w-[85%] rounded-3xl rounded-bl-md bg-white/10 px-4 py-3 text-sm text-slate-100">
                                    Hey team, the new onboarding flow looks amazing.
                                </div>
                                <div className="ml-auto max-w-[85%] rounded-3xl rounded-br-md bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-3 text-sm text-white">
                                    Agreed. It feels faster and cleaner on mobile too.
                                </div>
                                <div className="max-w-[78%] rounded-3xl rounded-bl-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                                    Let&apos;s launch it after the final UI review.
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                                <FaComments className="text-sky-300" />
                                <span className="flex-1">Type a message...</span>
                                <span className="rounded-full bg-sky-500/15 px-3 py-1 text-xs text-sky-200">
                                    Enter
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
