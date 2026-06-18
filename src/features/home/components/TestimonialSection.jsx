import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Mai Tran",
        role: "Product Manager",
        comment:
            "Chatio feels like a real product. The interface is polished and easy to navigate on every device.",
    },
    {
        name: "Dat Le",
        role: "Frontend Developer",
        comment:
            "The split layout and glassmorphism style make the app look premium enough for a portfolio.",
    },
    {
        name: "Huyen Pham",
        role: "Community Lead",
        comment:
            "Our team can jump into rooms, react quickly, and collaborate without the interface getting in the way.",
    },
];

const TestimonialSection = () => {
    return (
        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                        Testimonials
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Loved by users who want a polished chat experience
                    </h2>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {testimonials.map((item) => (
                        <article
                            key={item.name}
                            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20 backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 font-semibold text-white">
                                    {item.name
                                        .split(" ")
                                        .map((part) => part[0])
                                        .join("")}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">{item.name}</h3>
                                    <p className="text-sm text-slate-400">{item.role}</p>
                                </div>
                            </div>

                            <div className="mt-5 flex items-center gap-1 text-amber-300">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <FaStar key={index} className="h-4 w-4" />
                                ))}
                            </div>

                            <p className="mt-4 text-sm leading-6 text-slate-300">
                                {item.comment}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
