import { FaGem, FaCheck } from "react-icons/fa";
import Button from "../../../shared/components/Button/button-base";

const benefits = [
    "Unlimited File Upload",
    "HD Video Calls",
    "Priority Support",
    "Custom Themes",
];

const PremiumBanner = () => {
    return (
        <section id="pricing" className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="overflow-hidden rounded-[2rem] border border-sky-400/15 bg-gradient-to-br from-sky-500/15 via-cyan-500/10 to-white/5 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur-xl sm:p-10">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-100">
                                <FaGem className="text-sky-300" />
                                Upgrade to Chatio Premium
                            </div>
                            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                                Unlock advanced collaboration tools for growing teams
                            </h2>
                            <p className="mt-4 max-w-2xl text-slate-200">
                                Give your workspace better file handling, richer calls, and
                                dedicated support with a premium upgrade designed for serious
                                chat power users.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {benefits.map((benefit) => (
                                <div
                                    key={benefit}
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-100"
                                >
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                                        <FaCheck className="h-3 w-3" />
                                    </span>
                                    {benefit}
                                </div>
                            ))}
                            <div className="sm:col-span-2">
                                <Button variant="primary" size="lg" fullWidth>
                                    Upgrade Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumBanner;
