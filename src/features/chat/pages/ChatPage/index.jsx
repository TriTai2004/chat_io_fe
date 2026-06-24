import { useState } from "react";
import {
    FaBell,
    FaPaperclip,
    FaPaperPlane,
    FaSearch,
    FaSmile,
    FaUsers,
} from "react-icons/fa";
import ChatAvatar from "../../components/ChatAvatar";
import ChatConversationItem from "../../components/ChatConversationItem";
import ChatMessageBubble from "../../components/ChatMessageBubble";
import ChatPanelHeader from "../../components/ChatPanelHeader";
import ChatScrollArea from "../../components/ChatScrollArea";
import "./style.css";
import getDateLabel from './../../../../shared/utils/formatDataLabel';
import { useChatMessages } from "../../hooks/useChatMessages";
import { useSocketMessages } from "../../hooks/UseSocketMessages";
import { useConversationList } from "../../hooks/useConversationList";
import { useCompactMode, useLockBodyScroll } from "../../hooks/UseCompactMode";
import { useSelectUser } from "../../../../shared/hooks/UseSelectAuth";
import CreateGroupModal from "../../components/CreateGroupModal";
import ChatHeader from "../../components/HeaderPage";


const quickActions = [
    // { icon: <FaPaperclip />, label: "Attach" },
    // { icon: <FaImage />, label: "Photo" },
    // { icon: <FaMicrophone />, label: "Voice" },
    // { icon: <FaVideo />, label: "Clip" },
];

const ChatPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { user } = useSelectUser();

    const {
        messages,
        message,
        setMessage,
        openConversation,
        loadOlderMessages,
        appendIncomingMessage,
        sendMessage,
    } = useChatMessages(user?.id);

    const { chatList, upsertLatestMessage} = useConversationList();

    const { activePanel, compactMode, setActivePanel } = useCompactMode();

    useLockBodyScroll();


    useSocketMessages((data) => {
        appendIncomingMessage(data);
        upsertLatestMessage(data);
    });
    
    const [openCreate,setOpenCreate] = useState(false);




    return (
        <main className="relative h-dvh overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),_transparent_26%),linear-gradient(180deg,_#eff6ff_0%,_#f8fafc_44%,_#eef6ff_100%)] text-slate-900">
            <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="pointer-events-none absolute right-[-5rem] top-24 h-72 w-72 rounded-full bg-emerald-300/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-6rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-300/10 blur-3xl" />

            <CreateGroupModal
                open={openCreate}
                onClose={()=>setOpenCreate(false)}
                onSubmit={(data)=>{
                    console.log(data);
                }}
            />
            <section className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-[1600px] flex-col gap-4 px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
                <ChatHeader/>


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
                                        onClick={() => setOpenCreate(true)}
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

                            <ChatScrollArea

                                className="chat-scrollbar flex min-h-0 flex-1 overflow-y-auto flex-col gap-2 px-3 py-3 lg:px-4">
                                {[...chatList.values() || []]?.map((chat) => (
                                    <ChatConversationItem
                                        key={chat.conversationId}

                                        name={chat.conversationName}

                                        lastMessage={chat.latestMessage}

                                        time={
                                            new Date(chat.latestMessageTime)
                                                .toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                })
                                        }

                                        avatar={chat.avatarChat}

                                        online={chat.online}

                                        label={
                                            chat.groupChat
                                                ? "Group"
                                                : "Conversation"
                                        }

                                        onClick={async () => {
                                            openConversation(chat.conversationId);
                                            setActivePanel("chat");
                                        }}
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
                                        label={messages[0]?.avatar}
                                    />
                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h2 className="m-0 text-base font-bold text-slate-900">
                                                {messages[0]?.fullname}
                                            </h2>
                                            {/* <span className="rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700">
                                                {activeConversation.label}
                                            </span> */}
                                        </div>
                                        {/* <p className="m-0 mt-1 text-sm text-slate-500">
                                            18 people online · last seen just now
                                        </p> */}
                                    </div>
                                </div>
                            </div>

                            <ChatScrollArea
                                initialAnchor="bottom"
                                onReachTop={loadOlderMessages}
                                dataLength={messages.length}
                                className="chat-scrollbar flex min-h-0 flex-1 overflow-y-auto px-3 py-3 lg:px-4 max-[640px]:px-2 max-[640px]:py-2"
                            >
                                <div className="flex min-h-0 flex-1 flex-col gap-3">

                                    {messages?.map((item, index) => {

                                        const currentDate = getDateLabel(item.createdAt);

                                        const previousDate =
                                            index > 0
                                                ? getDateLabel(messages[index - 1].createdAt)
                                                : null;

                                        return (
                                            <div key={item.id}>

                                                {currentDate !== previousDate && (
                                                    <div className="my-3 text-center text-xs text-gray-500">
                                                        {currentDate}
                                                    </div>
                                                )}

                                                <ChatMessageBubble
                                                    text={item?.content}
                                                    author={item?.fullname}
                                                    time={
                                                        new Date(item.createdAt)
                                                            .toLocaleTimeString([], {
                                                                hour: "2-digit",
                                                                minute: "2-digit"
                                                            })
                                                    }
                                                    mine={user?.id == item?.senderId}
                                                />

                                            </div>
                                        );
                                    })}

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

                                <form

                                    onSubmit={async (e) => await sendMessage(e)}

                                    className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-2 rounded-[1.25rem] border border-sky-100 bg-slate-50 p-2 shadow-sm max-[640px]:grid-cols-[auto_1fr_auto] max-[640px]:gap-1.5">
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
                                        type="submit"
                                        className="inline-flex h-11 items-center gap-2 rounded-2xl bg-gradient-to-r
                                         from-sky-500 to-blue-600 px-4 py-2.5 text-sm font-semibold 
                                         text-white shadow-[0_18px_42px_rgba(37,99,235,0.22)] 
                                         transition hover:-translate-y-0.5 max-[640px]:h-10 max-[640px]:px-3"
                                        disabled={!message.trim()}
                                        aria-label="Send message"

                                    >
                                        <FaPaperPlane />
                                        <span>Send</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default ChatPage;
