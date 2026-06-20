const StatTile = ({ label, value, detail }) => (
    <div className="rounded-[1.15rem] border border-sky-100 bg-slate-50/90 p-4 shadow-sm">
        <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600">{label}</p>
        <p className="m-0 mt-2 text-2xl font-bold text-slate-900">{value}</p>
        <p className="m-0 mt-1 text-xs leading-5 text-slate-500">{detail}</p>
    </div>
);

export default StatTile;
