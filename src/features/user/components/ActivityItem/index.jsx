const ActivityItem = ({ title, time, note }) => (
    <div className="flex gap-3 rounded-[1.1rem] border border-sky-100 bg-slate-50/90 px-4 py-3.5 shadow-sm">
        <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 shadow-[0_0_0_6px_rgba(56,189,248,0.12)]" />
        <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="m-0 text-sm font-semibold text-slate-900">{title}</p>
                <span className="text-xs text-slate-500">{time}</span>
            </div>
            <p className="m-0 mt-1 text-sm leading-6 text-slate-600">{note}</p>
        </div>
    </div>
);

export default ActivityItem;
