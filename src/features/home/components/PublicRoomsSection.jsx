import { FaUsers, FaTag } from "react-icons/fa";
import Button from "../../../shared/components/Button/button-base";

const rooms = [
    {
        name: "Developers Vietnam",
        members: "12.4K",
        category: "Community",
    },
    {
        name: "React Community",
        members: "24.9K",
        category: "Frontend",
    },
    {
        name: "Spring Boot Community",
        members: "18.3K",
        category: "Backend",
    },
    {
        name: "Gaming Zone",
        members: "8.7K",
        category: "Lifestyle",
    },
];

const PublicRoomsSection = () => {
    return (
        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                        Public Rooms
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Trending public rooms to join now
                    </h2>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {rooms.map((room) => (
                        <article
                            key={room.name}
                            className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-300/30"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{room.name}</h3>
                                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                                        <FaUsers className="text-sky-300" />
                                        {room.members} members
                                    </div>
                                </div>
                                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                                    <FaTag className="mr-1 inline" />
                                    {room.category}
                                </div>
                            </div>

                            <div className="mt-6 flex flex-1 items-end">
                                <Button variant="outline" size="sm" fullWidth>
                                    Join Room
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PublicRoomsSection;
