const stats = [
    ["100K+", "Users"],
    ["5M+", "Messages Sent"],
    ["20K+", "Communities"],
    ["99.9%", "Uptime"],
];

const StatisticsSection = () => {
    return (
        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map(([value, label]) => (
                        <article
                            key={label}
                            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-slate-950/20 backdrop-blur-xl"
                        >
                            <div className="text-3xl font-semibold tracking-tight text-white">{value}</div>
                            <div className="mt-2 text-sm text-slate-300">{label}</div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;
