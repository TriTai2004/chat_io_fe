const DeviceCard = ({ name, meta, active }) => (
    <div className="flex items-start justify-between gap-3 rounded-[1.1rem] border border-sky-100 bg-slate-50/90 px-4 py-3.5 shadow-sm">
        <div>
            <div className="flex items-center gap-2">
                <p className="m-0 text-sm font-semibold text-slate-900">{name}</p>
                {active ? (
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
                        Active
                    </span>
                ) : null}
            </div>
            <p className="m-0 mt-1 text-sm text-slate-500">{meta}</p>
        </div>
        <button type="button" className="text-sm font-semibold text-sky-600 transition hover:text-sky-700">
            Manage
        </button>
    </div>
);

export default DeviceCard;
