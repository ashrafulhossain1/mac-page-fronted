import RoomCard from "@/pages/Home/_components/RoomCard";
import { rooms } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

export default function RelevantRooms() {
    const { id } = useParams<{ id: string }>();

    // Filter out the current room and get 3 relevant rooms
    const relevantRooms = rooms
        .filter((room) => room.id !== Number(id))
        .slice(0, 3);

    return (
        <div className="mt-12">
            <h2 className="text-[32px] md:text-4xl font-semibold leading-[48px] text-black mb-8">
                Relevent <span className="text-primary">rooms</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relevantRooms.map((room) => (
                    <RoomCard
                        key={room.id}
                        id={room.id}
                        image={room.image}
                        title={room.title}
                        price={room.price}
                        location={room.location}
                        description={room.description}
                        rating={room.rating}
                        reviews={room.reviews}
                    />
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <Button
                    variant="default"
                    className="px-8 py-3 text-[18px] font-semibold rounded-[16px] flex items-center gap-2 bg-primary text-white hover:bg-primary/80 transition-colors"
                    asChild
                >
                    <Link to="/browse">
                        <span>View All Rooms</span>
                        <FaArrowRightLong />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
