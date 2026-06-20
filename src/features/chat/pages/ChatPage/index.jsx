import { useEffect, useMemo, useState } from "react";
import {
    FaBell,
    FaImage,
    FaMicrophone,
    FaPaperclip,
    FaPaperPlane,
    FaSearch,
    FaSmile,
    FaUsers,
    FaVideo,
} from "react-icons/fa";
import ChatAvatar from "../../components/ChatAvatar";
import ChatConversationItem from "../../components/ChatConversationItem";
import ChatMessageBubble from "../../components/ChatMessageBubble";
import ChatPanelHeader from "../../components/ChatPanelHeader";
import ChatScrollArea from "../../components/ChatScrollArea";
import "./style.css";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../auth/selectors";

const conversations = [
    {
        id: 1,
        name: "Design Sprint",
        label: "Team",
        lastMessage: "The new message composer feels much smoother.",
        time: "09:42",
        unread: 3,
        active: true,
        online: true,
        avatar: "DS",
        accent: "linear-gradient(135deg, #38bdf8, #2563eb)",
    },
    {
        id: 2,
        name: "Product Guild",
        label: "Channel",
        lastMessage: "We should ship the announcement draft this afternoon.",
        time: "08:18",
        unread: 0,
        active: false,
        online: false,
        avatar: "PG",
        accent: "linear-gradient(135deg, #22c55e, #14b8a6)",
    },
    {
        id: 3,
        name: "Anh Khoa",
        label: "Direct",
        lastMessage: "I pinned the updated onboarding flow.",
        time: "Yesterday",
        unread: 1,
        active: false,
        online: true,
        avatar: "AK",
        accent: "linear-gradient(135deg, #f472b6, #8b5cf6)",
    },
    {
        id: 4,
        name: "Marketing Studio",
        label: "Room",
        lastMessage: "Can we rework the hero animation timing?",
        time: "Mon",
        unread: 0,
        active: false,
        online: false,
        avatar: "MS",
        accent: "linear-gradient(135deg, #f59e0b, #ef4444)",
    },
    {
        id: 5,
        name: "Marketing Studio",
        label: "Room",
        lastMessage: "Can we rework the hero animation timing?",
        time: "Mon",
        unread: 0,
        active: false,
        online: false,
        avatar: "MS",
        accent: "linear-gradient(135deg, #f59e0b, #ef4444)",
    },
];

const messages = [
    {
        id: 1,
        author: "Mika",
        role: "Support Lead",
        time: "09:18",
        text: "Morning team, I mapped the new chat layout into 3 layers: list, thread, and details.",
        mine: false,
    },
    {
        id: 2,
        author: "You",
        role: "Product",
        time: "09:19",
        text: "Nice. Let's make the desktop view feel like Telegram, but with a softer premium surface.",
        mine: true,
    },
    {
        id: 3,
        author: "Mika",
        role: "Support Lead",
        time: "09:21",
        text: "Agreed. I also added compact switching for tablet and mobile, so the layout stays usable.",
        mine: false,
    },
    {
        id: 4,
        author: "You",
        role: "Product",
        time: "09:24",
        text: "Perfect. Add a composer with quick actions, plus a clear info panel for files and members.",
        mine: true,
    },
    {
        id: 5,
        author: "Mika",
        role: "Support Lead",
        time: "09:26",
        text: "Done. I'm also making the message bubbles more polished than a standard social app.",
        mine: false,
    },
    {
        id: 6,
        author: "You",
        role: "Product",
        time: "09:32",
        text: "Great, let's ensure the inner panels scroll independently so the page itself stays fixed.",
        mine: true,
    },
];

const quickActions = [
    { icon: <FaPaperclip />, label: "Attach" },
    { icon: <FaImage />, label: "Photo" },
    { icon: <FaMicrophone />, label: "Voice" },
    { icon: <FaVideo />, label: "Clip" },
];

const ChatPage = () => {
    const [compactMode, setCompactMode] = useState(false);
    const [activePanel, setActivePanel] = useState("chat");
    const [searchQuery, setSearchQuery] = useState("");
    const [message, setMessage] = useState("");
    const user = useSelector(selectAuth);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, []);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 1100px)");

        const syncMode = () => {
            setCompactMode(media.matches);
            if (!media.matches) {
                setActivePanel("chat");
            }
        };

        syncMode();
        media.addEventListener("change", syncMode);

        return () => media.removeEventListener("change", syncMode);
    }, []);

    const activeConversation = useMemo(
        () => conversations.find((conversation) => conversation.active) ?? conversations[0],
        []
    );

    const filteredConversations = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        if (!query) {
            return conversations;
        }

        return conversations.filter((conversation) => {
            return [conversation.name, conversation.label, conversation.lastMessage]
                .join(" ")
                .toLowerCase()
                .includes(query);
        });
    }, [searchQuery]);

    return (
        <main className="relative h-dvh overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),_transparent_26%),linear-gradient(180deg,_#eff6ff_0%,_#f8fafc_44%,_#eef6ff_100%)] text-slate-900">
            <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="pointer-events-none absolute right-[-5rem] top-24 h-72 w-72 rounded-full bg-emerald-300/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-6rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-300/10 blur-3xl" />

            <section className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-[1600px] flex-col gap-4 px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
                <header className="flex flex-col gap-3 rounded-[1.35rem] border border-sky-100/80 bg-white/90 p-2.5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur-md lg:flex-row lg:items-center lg:gap-4 lg:p-4">
                    <div className="flex min-w-0 items-center gap-3">
                        <ChatAvatar size="sm" accent="linear-gradient(135deg, #38bdf8, #2563eb)">
                            <FaUsers />
                        </ChatAvatar>
                        <div className="min-w-0">
                            <p className="m-0 text-sm font-bold text-slate-900">Chatio</p>
                            <span className="block text-[11px] text-slate-500">
                                Fast, friendly, and built for nonstop chat
                            </span>
                        </div>
                    </div>

                    <label className="hidden min-w-0 flex-1 items-center gap-2 rounded-full border border-sky-100 bg-slate-50 px-3 py-2 text-slate-500 sm:flex">
                        <FaSearch className="shrink-0" />
                        <input
                            type="search"
                            placeholder="Search messages, people, or files"
                            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                        />
                    </label>

                    <div className="flex items-center gap-2 self-start lg:self-auto">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-gradient-to-r from-sky-50 to-white px-3 py-2 text-xs font-semibold text-sky-700 shadow-sm"
                        >
                            <FaBell />
                            <span>3 alerts</span>
                        </button>
                        <button type="button" className="rounded-full" aria-label="Open profile">
                            <ChatAvatar src={user?.imgage} size="sm" label="PT" accent="linear-gradient(135deg, #22c55e, #3b82f6)" />
                        </button>
                    </div>
                </header>


                <div className="grid min-h-0 flex-1 gap-3 overflow-hidden lg:grid-cols-[minmax(240px,0.72fr)_minmax(0,1.8fr)] max-[640px]:gap-2">
                    <aside
                        className={[
                            "min-h-0 flex-col overflow-hidden rounded-[1.35rem] border border-sky-100/80 bg-white/90 shadow-[0_16px_40px_rgba(15,23,42,0.07)] backdrop-blur-md",
                            compactMode && activePanel === "chat" ? "hidden lg:flex" : "flex",
                            compactMode && activePanel === "inbox" ? "flex" : "",
                        ]
                            .filter(Boolean)
                            .join(" ")}
                    >
                        <ChatPanelHeader kicker="Inbox" title="Messages" actionLabel="New" />

                        <div className="flex min-h-0 flex-1 flex-col">
                            <div className="border-b border-sky-50 px-3 pb-3 pt-3">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                                    <label className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-sky-100 bg-slate-50 px-3 py-2 text-slate-500">
                                        <FaSearch className="shrink-0" />
                                        <input
                                            type="search"
                                            value={searchQuery}
                                            onChange={(event) => setSearchQuery(event.target.value)}
                                            placeholder="Search people, rooms, messages"
                                            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                                        />
                                    </label>

                                    <button
                                        type="button"
                                        className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-sky-500 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-600 sm:w-auto"
                                    >
                                        <FaUsers />
                                        <span>New chat</span>
                                    </button>
                                </div>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    <button
                                        type="button"
                                        className="rounded-full border border-sky-100 bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm"
                                    >
                                        All
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-full border border-sky-100 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-100"
                                    >
                                        Unread
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-full border border-sky-100 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-100"
                                    >
                                        Pinned
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-full border border-sky-100 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-100"
                                    >
                                        Muted
                                    </button>
                                </div>
                            </div>

                            <ChatScrollArea className="chat-scrollbar flex min-h-0 flex-1 overflow-y-auto flex-col gap-2 px-3 py-3 lg:px-4">
                                {filteredConversations.map((conversation) => (
                                    <ChatConversationItem
                                        key={conversation.id}
                                        onClick={() => setActivePanel("chat")}
                                        {...conversation}
                                    />
                                ))}
                            </ChatScrollArea>
                        </div>
                    </aside>

                    <section
                        className={[
                            "min-h-0 flex-col overflow-hidden rounded-[1.35rem] border border-sky-100/80 bg-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-md",
                            compactMode && activePanel === "inbox" ? "hidden lg:flex" : "flex",
                        ]
                            .filter(Boolean)
                            .join(" ")}
                    >
                        <div className="flex min-h-0 flex-1 flex-col">
                            <div className="flex items-center justify-between gap-3 border-b border-sky-50 px-3 py-3 lg:px-4 max-[640px]:sticky max-[640px]:top-0 max-[640px]:z-10 max-[640px]:bg-white/95 max-[640px]:backdrop-blur-md">
                                <div className="flex min-w-0 items-center gap-3">
                                    {compactMode ? (
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-full border border-sky-100 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-sky-700 transition hover:-translate-y-0.5 hover:bg-slate-100 lg:hidden"
                                            onClick={() => setActivePanel("inbox")}
                                        >
                                            Back
                                        </button>
                                    ) : null}
                                    <ChatAvatar
                                        size="sm"
                                        label={activeConversation.avatar}
                                        accent={activeConversation.accent}
                                        online={activeConversation.online}
                                    />
                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h2 className="m-0 text-base font-bold text-slate-900">
                                                {activeConversation.name}
                                            </h2>
                                            <span className="rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700">
                                                {activeConversation.label}
                                            </span>
                                        </div>
                                        <p className="m-0 mt-1 text-sm text-slate-500">
                                            18 people online · last seen just now
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <ChatScrollArea className="chat-scrollbar flex min-h-0 flex-1 overflow-y-auto px-3 py-3 lg:px-4 max-[640px]:px-2 max-[640px]:py-2">
                                <div className="flex min-h-0 flex-1 flex-col gap-3">
                                    {messages.map((item) => (
                                        <ChatMessageBubble key={item.id} {...item} />
                                    ))}
                                </div>
                            </ChatScrollArea>

                            <div className="sticky bottom-0 z-20 border-t border-sky-50 bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md max-[640px]:px-2 max-[640px]:pt-2">
                                <div className="mb-2 flex flex-wrap gap-2 max-[640px]:hidden">
                                    {quickActions.map((action) => (
                                        <button
                                            type="button"
                                            key={action.label}
                                            className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-slate-50 px-3 py-2 text-xs text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-100"
                                        >
                                            {action.icon}
                                            <span>{action.label}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-2 rounded-[1.25rem] border border-sky-100 bg-slate-50 p-2 shadow-sm max-[640px]:grid-cols-[auto_1fr_auto] max-[640px]:gap-1.5">
                                    <button
                                        type="button"
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-600 transition hover:-translate-y-0.5 hover:bg-sky-50 max-[640px]:h-9 max-[640px]:w-9"
                                        aria-label="Attach file"
                                    >
                                        <FaPaperclip />
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-600 transition hover:-translate-y-0.5 hover:bg-sky-50 max-[640px]:h-9 max-[640px]:w-9"
                                        aria-label="Emoji picker"
                                    >
                                        <FaSmile />
                                    </button>

                                    <textarea
                                        rows={1}
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                        placeholder="Write a message, share an idea, or drop a file..."
                                        className="min-h-[3rem] w-full resize-none border-0 bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 max-[640px]:col-span-2 max-[640px]:min-h-[3.5rem]"
                                    />

                                    <button
                                        type="button"
                                        className="inline-flex h-11 items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5 max-[640px]:h-10 max-[640px]:px-3"
                                        aria-label="Send message"
                                    >
                                        <FaPaperPlane />
                                        <span>Send</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default ChatPage;
