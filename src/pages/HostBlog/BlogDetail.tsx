import { useParams, Navigate } from "react-router";
import { hostBlogs } from "../../data/data";
import { Button } from "@/components/ui/button";

export default function HostBlogDetail() {
    const { id } = useParams();
    const blogs = hostBlogs;
    const blog = blogs.find((b) => b.id === Number(id));

    const redirectPath = "/host-blog";

    if (!id || !blog) {
        return <Navigate to={redirectPath} replace />;
    }

    const { fullContent } = blog;

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Featured Image */}
                <div className="rounded-[30px] overflow-hidden mb-10 shadow-sm border border-gray-100">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-auto object-cover max-h-[500px]"
                    />
                </div>

                {/* Title and Date */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight max-w-2xl">
                        {blog.title}
                    </h1>
                    <span className="text-primary font-semibold whitespace-nowrap">
                        {blog.date}
                    </span>
                </div>

                {/* Main Content Area */}
                <div className="prose prose-lg max-w-none text-secondary-foreground space-y-10">
                    {/* Intro */}
                    {fullContent?.intro && (
                        <p className="text-xl leading-relaxed text-gray-700 font-medium italic border-l-4 border-primary pl-6">
                            {fullContent.intro}
                        </p>
                    )}

                    {/* Sections */}
                    {fullContent?.sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary-foreground">
                                {section.title}
                            </h2>
                            <div className="text-lg leading-relaxed whitespace-pre-line text-gray-600">
                                {section.content}
                            </div>
                        </div>
                    ))}

                    {/* Conclusion/Summary */}
                    {fullContent?.conclusion && (
                        <div className="bg-gray-50 p-8 rounded-[24px] border border-gray-100 space-y-6">
                            <h2 className="text-2xl font-bold text-primary-foreground">
                                Conclusion
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-600 whitespace-pre-line">
                                {fullContent.conclusion}
                            </p>

                            {/* CTA Button */}
                            <div className="pt-4 flex justify-center">
                                <Button className="bg-primary hover:bg-[#ea580c] text-white px-10 py-6 text-lg rounded-full font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                    Rent your room
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
