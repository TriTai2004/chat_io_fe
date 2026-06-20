const InfoRow = ({ label, value, icon: Icon }) => (
    <div className="flex items-start gap-3 rounded-[1.1rem] border border-sky-100 bg-slate-50/90 px-4 py-3.5 shadow-sm">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
            <Icon />
        </div>
        <div className="min-w-0">
            <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-600">{label}</p>
            <p className="m-0 mt-1 text-sm font-medium text-slate-900">{value}</p>
        </div>
    </div>
);

export default InfoRow;
