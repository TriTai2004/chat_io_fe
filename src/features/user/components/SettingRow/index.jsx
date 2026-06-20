const SettingRow = ({ label, value }) => (
    <div className="flex items-center justify-between gap-4 rounded-[1.1rem] border border-sky-100 bg-slate-50/90 px-4 py-3.5 shadow-sm">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-semibold text-slate-900">{value}</span>
    </div>
);

export default SettingRow;
