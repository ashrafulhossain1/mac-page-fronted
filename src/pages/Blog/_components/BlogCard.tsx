import { Link } from "react-router";
import type { BlogPost } from "../../../data/data";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { decentHover } from "@/lib/animations";

interface BlogCardProps {
    blog: BlogPost;
    isHost?: boolean;
}

export default function BlogCard({ blog, isHost }: BlogCardProps) {
    const blogPath = isHost ? `/host-blog/${blog.id}` : `/guest-blog/${blog.id}`;

    return (
        <motion.div whileHover={decentHover} className="w-full h-full">
            <Link
                to={blogPath}
                className="group block h-full rounded-[24px] overflow-hidden border border-gray-300 hover:shadow-xl transition-all duration-500 p-4 bg-white"
            >
                {/* Image */}
                <div className="overflow-hidden rounded-[16px] h-[220px] md:h-[260px] lg:h-[410px]">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-[16px]"
                    />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                    <h3 className="text-xl font-bold text-primary-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors duration-300">
                        {blog.title}
                    </h3>
                    <p className="text-sm text-secondary-foreground leading-relaxed line-clamp-2 mb-4 font-medium opacity-80">
                        {blog.description}
                    </p>
                    <Separator className="my-5" />
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-500">
                            {blog.views} views
                        </span>
                        <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/5 rounded-full">
                            {blog.date}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
