import { Link } from "react-router";
import type { BlogPost } from "../../../data/data";
import { Separator } from "@/components/ui/separator";

interface BlogCardProps {
    blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <Link
            to={`/blog/${blog.id}`}
            className="group rounded-[24px] overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300 p-4 bg-gray-50"
        >
            {/* Image */}
            <div className="overflow-hidden rounded-[16px] h-[220px] md:h-[260px] lg:h-[410px]">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-[16px]"
                />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
                <h3 className="text-lg font-bold text-primary-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {blog.title}
                </h3>
                <p className="text-sm text-secondary-foreground leading-relaxed line-clamp-2 mb-4">
                    {blog.description}
                </p>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-primary-foreground">
                        {blog.views} views
                    </span>
                    <span className="text-sm font-medium text-primary">
                        {blog.date}
                    </span>
                </div>
            </div>
        </Link>
    );
}
