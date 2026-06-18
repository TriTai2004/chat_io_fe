const users = [
    ["AN", "An Nguyen"],
    ["LB", "Linh Bui"],
    ["MK", "Minh Khanh"],
    ["TP", "Trang Pham"],
    ["HT", "Hai Tran"],
    ["QN", "Quynh Nguyen"],
];

const OnlineUsersSection = () => {
    return (
        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                            Community
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Online community that feels alive
                        </h2>
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                        128,450 members online
                    </div>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {users.map(([initials, name]) => (
                        <article
                            key={name}
                            className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-sky-300/30"
                        >
                            <div className="relative">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 font-semibold text-white shadow-lg shadow-sky-500/20">
                                    {initials}
                                </div>
                                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-slate-950 bg-emerald-400" />
                            </div>
                            <div>
                                <div className="font-medium text-white">{name}</div>
                                <div className="text-sm text-emerald-300">Online now</div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OnlineUsersSection;
