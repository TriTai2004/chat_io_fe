import { FaBell, FaCamera, FaCheckCircle, FaEdit } from "react-icons/fa";
import PageBackdrop from "../../components/PageBackdrop";
import UserBackButton from "../../components/UserBackButton";
import SectionCard from "../../components/SectionCard";
import StatTile from "../../components/StatTile";
import InfoRow from "../../components/InfoRow";
import SettingRow from "../../components/SettingRow";
import ActivityItem from "../../components/ActivityItem";
import DeviceCard from "../../components/DeviceCard";
import ThemeOptionCard from "../../components/ThemeOptionCard";
import { activity, connectedDevices, contactItems, privacyActions, privacyItems, profile, quickActions, stats, themeOptions } from "./data";

const UserPage = () => {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),_transparent_26%),linear-gradient(180deg,_#eff6ff_0%,_#f8fafc_44%,_#eef6ff_100%)] text-slate-900">
            <PageBackdrop />

            <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col gap-4 px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
                <header className="flex flex-col gap-3 rounded-[1.4rem] border border-sky-100/80 bg-white/90 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex min-w-0 items-start gap-3 sm:items-center">
                        <UserBackButton />
                        <div className="min-w-0">
                            <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600">
                                Personal profile
                            </p>
                            <h1 className="m-0 mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                                Account & personal information
                            </h1>
                            <p className="m-0 mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                                Manage your identity, privacy, and active devices in one clean dashboard.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100"
                        >
                            <FaBell />
                            Notifications
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.2)] transition hover:-translate-y-0.5"
                        >
                            <FaEdit />
                            Edit profile
                        </button>
                    </div>
                </header>

                <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.82fr)]">
                    <div className="flex min-h-0 flex-col gap-4">
                        <SectionCard
                            title="Profile overview"
                            subtitle="Your public identity, contact details, and headline"
                            action={
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100"
                                >
                                    <FaCamera />
                                    Change photo
                                </button>
                            }
                        >
                            <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)]">
                                <div className="flex flex-col items-center gap-3 rounded-[1.4rem] border border-sky-100 bg-[linear-gradient(180deg,_rgba(239,246,255,0.95),_rgba(255,255,255,1))] px-5 py-5 text-center shadow-sm">
                                    <div className="relative">
                                        <div
                                            className="grid h-28 w-28 place-items-center rounded-[1.9rem] text-3xl font-black text-white shadow-[0_20px_45px_rgba(37,99,235,0.28)]"
                                            style={{ background: profile.accent }}
                                        >
                                            TN
                                        </div>
                                        <span className="absolute -right-1.5 bottom-1 inline-flex items-center gap-1 rounded-full border border-white/80 bg-emerald-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
                                            <FaCheckCircle />
                                            {profile.status}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="m-0 text-xl font-bold text-slate-900">{profile.name}</p>
                                        <p className="m-0 mt-1 text-sm text-slate-500">{profile.username}</p>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                                            {profile.role}
                                        </span>
                                        <span className="rounded-full border border-sky-100 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                                            {profile.joinedAt}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {contactItems.map((item) => (
                                        <InfoRow key={item.label} {...item} />
                                    ))}
                                </div>

                                <div className="md:col-span-2 rounded-[1.2rem] border border-sky-100 bg-slate-50/90 px-4 py-4 shadow-sm">
                                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600">
                                        Bio
                                    </p>
                                    <p className="m-0 mt-2 max-w-3xl text-sm leading-7 text-slate-600">{profile.bio}</p>
                                </div>
                            </div>
                        </SectionCard>

                        <SectionCard title="Account stats" subtitle="A quick snapshot of your account activity">
                            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                                {stats.map((item) => (
                                    <StatTile key={item.label} {...item} />
                                ))}
                            </div>
                        </SectionCard>

                        <SectionCard title="Recent activity" subtitle="Latest profile changes and account actions">
                            <div className="space-y-3">
                                {activity.map((item) => (
                                    <ActivityItem key={item.title} {...item} />
                                ))}
                            </div>
                        </SectionCard>
                    </div>

                    <div className="flex min-h-0 flex-col gap-4">
                        <SectionCard title="Privacy & security" subtitle="Control who sees your profile and how you sign in">
                            <div className="space-y-3">
                                {privacyItems.map((item) => (
                                    <SettingRow key={item.label} {...item} />
                                ))}

                                <div className="grid gap-3 pt-1 sm:grid-cols-2">
                                    {privacyActions.map(({ label, icon: Icon }) => (
                                    <button
                                        key={label}
                                        type="button"
                                        className="inline-flex items-center justify-center gap-2 rounded-[1.1rem] border border-sky-100 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100"
                                    >
                                        <Icon />
                                        {label}
                                    </button>
                                ))}
                                </div>
                            </div>
                        </SectionCard>

                        <SectionCard title="Connected devices" subtitle="Where your account is currently signed in">
                            <div className="space-y-3">
                                {connectedDevices.map((device) => (
                                    <DeviceCard key={device.name} {...device} />
                                ))}
                            </div>
                        </SectionCard>

                        <SectionCard title="Theme preferences" subtitle="Your preferred reading and display setup">
                            <div className="grid gap-3 sm:grid-cols-3">
                                {themeOptions.map((item) => (
                                    <ThemeOptionCard key={item.label} {...item} />
                                ))}
                            </div>
                        </SectionCard>

                        <SectionCard title="Quick actions" subtitle="Shortcuts for account and personal settings">
                            <div className="grid gap-3 sm:grid-cols-2">
                                {quickActions.map(({ label, icon: Icon, tone }) => (
                                    <button
                                        key={label}
                                        type="button"
                                        className={`inline-flex items-center justify-center gap-2 rounded-[1.1rem] border px-4 py-3.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 ${
                                            tone === "primary"
                                                ? "border-sky-100 bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_16px_40px_rgba(37,99,235,0.22)]"
                                                : "border-sky-100 bg-slate-50 text-slate-700 hover:bg-slate-100"
                                        }`}
                                    >
                                        <Icon />
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </SectionCard>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default UserPage;

