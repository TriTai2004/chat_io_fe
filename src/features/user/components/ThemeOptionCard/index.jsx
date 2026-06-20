const ThemeOptionCard = ({ label, icon: Icon }) => (
    <button
        type="button"
        className="flex flex-col items-start gap-3 rounded-[1.2rem] border border-sky-100 bg-slate-50/90 px-4 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100"
    >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
            <Icon />
        </span>
        <span className="text-sm font-semibold text-slate-900">{label}</span>
    </button>
);

export default ThemeOptionCard;
