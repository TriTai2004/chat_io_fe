const SectionCard = ({ title, subtitle, action, children, className = "" }) => (
    <section
        className={`rounded-[1.4rem] border border-sky-100/80 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-md ${className}`}
    >
        <div className="flex items-start justify-between gap-3 border-b border-sky-50 px-4 py-4 sm:px-5">
            <div className="min-w-0">
                <h2 className="m-0 text-sm font-bold tracking-[0.02em] text-slate-900 sm:text-base">
                    {title}
                </h2>
                {subtitle ? <p className="m-0 mt-1 text-xs text-slate-500 sm:text-sm">{subtitle}</p> : null}
            </div>
            {action ? <div className="shrink-0">{action}</div> : null}
        </div>
        <div className="px-4 py-4 sm:px-5">{children}</div>
    </section>
);

export default SectionCard;
