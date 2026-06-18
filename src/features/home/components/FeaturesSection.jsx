import {
    FaBolt,
    FaVideo,
    FaUsers,
    FaFileUpload,
    FaSmile,
    FaLock,
} from "react-icons/fa";

const features = [
    {
        icon: FaBolt,
        title: "Realtime Messaging",
        description: "Lightning-fast message sync for smooth team communication.",
    },
    {
        icon: FaVideo,
        title: "Voice & Video Call",
        description: "Connect face to face with crisp voice and high quality video calls.",
    },
    {
        icon: FaUsers,
        title: "Group Chat",
        description: "Build communities and collaborate in shared spaces effortlessly.",
    },
    {
        icon: FaFileUpload,
        title: "File Sharing",
        description: "Send documents, screenshots, and media with drag-and-drop ease.",
    },
    {
        icon: FaSmile,
        title: "Emoji & Reactions",
        description: "React naturally and keep conversations expressive and engaging.",
    },
    {
        icon: FaLock,
        title: "Secure Authentication",
        description: "Protected sessions and trusted access for every user.",
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                        Features
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Everything you need in one modern chat platform
                    </h2>
                    <p className="mt-4 text-slate-300">
                        Chatio is crafted to feel premium, responsive, and intuitive for real
                        product use.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                key={feature.title}
                                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/8"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-cyan-400/20 text-sky-300 transition group-hover:scale-105">
                                    <Icon />
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                    {feature.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
