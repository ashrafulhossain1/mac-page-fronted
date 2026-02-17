interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className="mt-12">
            {/* Page Dots */}
            <div className="flex justify-center items-center gap-2 mb-6">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => onPageChange(i + 1)}
                        className={`w-3 h-3 rounded-full transition-all cursor-pointer ${currentPage === i + 1
                            ? "bg-primary scale-110"
                            : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to page ${i + 1}`}
                    />
                ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex justify-center items-center gap-3">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all cursor-pointer ${currentPage === 1
                        ? "border-gray-200 text-gray-300 cursor-not-allowed"
                        : "border-gray-300 text-primary-foreground hover:border-primary hover:text-primary"
                        }`}
                >
                    ← Previous
                </button>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${currentPage === totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-primary text-white hover:bg-[#ea580c]"
                        }`}
                >
                    Next →
                </button>
            </div>
        </div>
    );
}
