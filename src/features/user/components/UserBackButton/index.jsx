import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const UserBackButton = () => (
    <Link
        to="/chat"
        className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100"
    >
        <FaArrowLeft />
        Back to chat
    </Link>
);

export default UserBackButton;
