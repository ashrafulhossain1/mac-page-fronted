import RoomCard from "@/pages/Home/_components/RoomCard";
import { rooms } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
    headingVariants,
    headingViewport,
    sequentialStaggerVariants,
    fastCardVariants,
    defaultViewport,
} from "@/lib/animations";

export default function RelevantRooms() {
    const { id } = useParams<{ id: string }>();

    // Filter out the current room and get 3 relevant rooms
    const relevantRooms = rooms
        .filter((room) => room.id !== Number(id))
        .slice(0, 3);

    return (
        <div className="mt-12 overflow-hidden">
            <motion.h2
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={headingViewport}
                className="text-[32px] md:text-4xl font-semibold leading-[48px] text-black mb-8"
            >
                Relevent <span className="text-primary">rooms</span>
            </motion.h2>

            <motion.div
                variants={sequentialStaggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {relevantRooms.map((room) => (
                    <motion.div key={room.id} variants={fastCardVariants}>
                        <RoomCard
                            id={room.id}
                            image={room.image}
                            title={room.title}
                            price={room.price}
                            location={room.location}
                            description={room.description}
                            rating={room.rating}
                            reviews={room.reviews}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                className="flex justify-center mt-8"
            >
                <Button
                    variant="default"
                    className="px-8 py-3 text-[18px] w-[247px] h-[60px] font-semibold rounded-[16px] flex items-center gap-2 bg-primary text-white hover:bg-primary/80 transition-colors"
                    asChild
                >
                    <Link to="/browse">
                        <span>View All Rooms</span>
                        <FaArrowRightLong />
                    </Link>
                </Button>
            </motion.div>
        </div>
    );
}
