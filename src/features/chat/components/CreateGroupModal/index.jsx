import { useMemo, useState } from "react";
import { FiX, FiCamera, FiSearch } from "react-icons/fi";
import ButtonBase from "../../../../shared/components/Button/button-base";

import "./stype.css";


const MOCK_USERS = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        avatar:
            "https://i.pravatar.cc/100?img=1",
        online: true,
    },
    {
        id: 2,
        name: "Trần Thị B",
        avatar:
            "https://i.pravatar.cc/100?img=2",
        online: false,
    },
    {
        id: 3,
        name: "Lê Văn C",
        avatar:
            "https://i.pravatar.cc/100?img=3",
        online: true,
    },
];


const CreateGroupModal = ({
    open,
    onClose,
    onSubmit,
    users = MOCK_USERS,
}) => {

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [keyword, setKeyword] = useState("");


    const filteredUsers = useMemo(() => {

        return users.filter(user =>
            user.name
                .toLowerCase()
                .includes(keyword.toLowerCase())
        );

    }, [users, keyword]);


    const toggleUser = (id) => {

        setSelectedUsers(prev =>
            prev.includes(id)
                ? prev.filter(x => x !== id)
                : [...prev, id]
        );

    };


    const handleAvatar = (e) => {

        const file = e.target.files[0];

        if (!file) return;


        setAvatar(
            URL.createObjectURL(file)
        );
    };


    const submit = () => {

        onSubmit?.({
            name,
            avatar,
            members: selectedUsers,
        });

    };


    if (!open) return null;


    return (
        <div className="create-group-overlay">


            <div className="create-group-modal">


                <div className="create-group-header">

                    <div>
                        <p className="create-group-eyebrow">
                            New conversation
                        </p>

                        <h2>
                            Create group
                        </h2>
                    </div>


                    <button
                        className="create-group-close"
                        onClick={onClose}
                    >
                        <FiX />
                    </button>

                </div>



                <div className="create-group-body">


                    {/* avatar */}

                    <label className="group-avatar">


                        {
                            avatar ? (
                                <img
                                    src={avatar}
                                    alt=""
                                />
                            )
                                :
                                (
                                    <FiCamera />
                                )
                        }


                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleAvatar}
                        />

                    </label>



                    <input
                        value={name}
                        onChange={
                            e => setName(e.target.value)
                        }
                        placeholder="Group name..."
                        className="group-input"
                    />


                    <div className="member-search">

                        <FiSearch />

                        <input
                            value={keyword}
                            onChange={
                                e => setKeyword(e.target.value)
                            }
                            placeholder="Search member..."
                        />

                    </div>




                    <div className="member-list">


                        {
                            filteredUsers.map(user => (

                                <div
                                    key={user.id}
                                    className={
                                        `
                                        member-item
                                        ${selectedUsers.includes(user.id)
                                            ? "member-active"
                                            : ""
                                        }
                                        `
                                    }

                                    onClick={() =>
                                        toggleUser(user.id)
                                    }
                                >


                                    <img
                                        src={user.avatar}
                                        alt=""
                                    />


                                    <div className="member-info">

                                        <strong>
                                            {user.name}
                                        </strong>

                                        <span>
                                            {
                                                user.online
                                                    ? "Online"
                                                    : "Offline"
                                            }
                                        </span>

                                    </div>



                                    <div className="member-check">

                                        {
                                            selectedUsers.includes(user.id)
                                                ? "✓"
                                                : ""
                                        }

                                    </div>


                                </div>

                            ))
                        }

                    </div>


                </div>

                <div className="create-group-footer">


                    <ButtonBase
                        variant="ghost"
                        onClick={onClose}
                    >
                        Cancel
                    </ButtonBase>


                    <ButtonBase
                        onClick={submit}
                        disabled={!name || !selectedUsers.length}
                    >
                        Create
                    </ButtonBase>


                </div>


            </div>

        </div>
    );
};


export default CreateGroupModal;