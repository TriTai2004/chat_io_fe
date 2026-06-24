import { useEffect, useRef, useState } from "react";
import {
    FaBell,
    FaSearch,
    FaUsers
} from "react-icons/fa";

import ChatAvatar from "../ChatAvatar";

import "./style.css";


const MOCK_USERS = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        email: "vana@gmail.com",
        avatar: "https://i.pravatar.cc/100?img=1",
        online: true
    },
    {
        id: 2,
        name: "Trần Thị B",
        email: "thib@gmail.com",
        avatar: "https://i.pravatar.cc/100?img=2",
        online: false
    },
    {
        id: 3,
        name: "Lê Văn C",
        email: "vanc@gmail.com",
        avatar: "https://i.pravatar.cc/100?img=3",
        online: true
    }
];



const ChatHeader = ({
    user,
    users = MOCK_USERS,
    onSelectUser
}) => {


    const [keyword, setKeyword] = useState("");
    const [open, setOpen] = useState(false);

    const wrapperRef = useRef(null);



    const result = users.filter(item =>
        item.name
            .toLowerCase()
            .includes(keyword.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (e) => {

            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target)
            ) {

                setOpen(false);

            }

        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );
        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };


    }, []);




    return (

        <header className="chat-header">
            <div className="flex min-w-0 items-center gap-3">
                <ChatAvatar
                    size="sm"
                    accent="linear-gradient(135deg,#38bdf8,#2563eb)"
                >
                    <FaUsers />
                </ChatAvatar>
                <div className="min-w-0">

                    <p className="m-0 text-sm font-bold text-slate-900">
                        Chatio
                    </p>
                    <span className="block text-[11px] text-slate-500">
                        Fast, friendly, and built for nonstop chat
                    </span>


                </div>
            </div>

            {/* SEARCH */}

            <div
                ref={wrapperRef}
                className="chat-search-wrapper"
            >
                <label className="chat-search">
                    <FaSearch />
                    <input
                        value={keyword}

                        onFocus={() => {
                            setOpen(true)
                        }}

                        onChange={(e) => {

                            setKeyword(e.target.value);
                            setOpen(true);

                        }}

                        placeholder="
                        Search messages, people, or files
                        "

                    />


                </label>
                {
                    open && keyword && (

                        <div className="chat-search-result">
                            {
                                result.length
                                    ?
                                    result.map(item => (


                                        <button
                                            key={item.id}
                                            className="search-user"

                                            onClick={() => {

                                                onSelectUser?.(item);
                                                setOpen(false);
                                                setKeyword("");

                                            }}

                                        >

                                            <ChatAvatar
                                                src={item.avatar}
                                                size="sm"
                                            />

                                            <div>

                                                <p>
                                                    {item.name}
                                                </p>

                                                <span>
                                                    {item.email}
                                                </span>

                                            </div>


                                            {
                                                item.online &&
                                                <i />
                                            }


                                        </button>
                                    ))

                                    :

                                    (
                                        <p className="empty-search">
                                            No user found
                                        </p>
                                    )
                            }

                        </div>

                    )
                }

            </div>

            <div className="flex items-center gap-2 self-start lg:self-auto">
                <button className="chat-alert">

                    <FaBell />

                    <span>
                        3 alerts
                    </span>

                </button>
                <button>

                    <ChatAvatar
                        src={user?.user?.avatar}
                        size="sm"
                        label="PT"
                        accent="linear-gradient(135deg,#22c55e,#3b82f6)"
                    />

                </button>
            </div>
        </header>

    );
};


export default ChatHeader;