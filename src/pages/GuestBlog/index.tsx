import { useState } from "react";
import { heroImages, guestBlogs } from "../../data/data";
import type { BlogPost } from "../../data/data";
import { motion } from "framer-motion";
import {
    sequentialStaggerVariants,
    fastCardVariants,
    defaultViewport,
} from "@/lib/animations";
import BlogHero from "../Blog/_components/BlogHero";
import BlogSort from "../Blog/_components/BlogSort";
import BlogCard from "../Blog/_components/BlogCard";
import Pagination from "../Blog/_components/Pagination";

const POSTS_PER_PAGE = 6;

export default function GuestBlog() {
    const isHost = false;
    const blogs: BlogPost[] = guestBlogs;
    const heroImage = heroImages.guest;
    const title = "Guest Blog";

    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

    const sortedBlogs = [...blogs].sort((a, b) => {
        if (sortOrder === "newest") {
            return b.id - a.id;
        }
        return a.id - b.id;
    });

    // Pagination
    const totalPages = Math.ceil(sortedBlogs.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const paginatedBlogs = sortedBlogs.slice(
        startIndex,
        startIndex + POSTS_PER_PAGE
    );

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 350, behavior: "smooth" });
        }
    };

    const handleSortChange = (order: "newest" | "oldest") => {
        setSortOrder(order);
        setCurrentPage(1);
    };

    return (
        <div>
            <BlogHero title={title} heroImage={heroImage} />
            <div className="max-w-7xl mx-auto px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={defaultViewport}
                    transition={{ duration: 0.6 }}
                >
                    <BlogSort sortOrder={sortOrder} onSortChange={handleSortChange} />
                </motion.div>

                <motion.div
                    key={`${sortOrder}-${currentPage}`} // Re-animate when sorting or paging changes
                    variants={sequentialStaggerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {paginatedBlogs.map((blog) => (
                        <motion.div key={blog.id} variants={fastCardVariants}>
                            <BlogCard blog={blog} isHost={isHost} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={defaultViewport}
                    transition={{ delay: 0.5 }}
                >
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={goToPage}
                    />
                </motion.div>
            </div>
        </div>
    );
}
