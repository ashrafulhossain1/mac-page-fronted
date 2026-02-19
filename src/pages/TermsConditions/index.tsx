import { termsData } from "./data";
import { motion } from "framer-motion";
import {
    headingVariants,
    headingViewport,
    sequentialStaggerVariants,
    fastCardVariants,
    defaultViewport,
} from "@/lib/animations";

export default function TermsConditions() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 overflow-hidden">
            {/* Title */}
            <motion.h1
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={headingViewport}
                className="text-4xl md:text-5xl font-bold text-primary-foreground mb-10 text-center"
            >
                <span className="text-primary">Terms</span> & Conditions
            </motion.h1>

            <motion.div
                variants={sequentialStaggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
            >
                {/* Welcome */}
                <motion.div variants={fastCardVariants} className="mb-10">
                    <p className="text-lg font-semibold text-gray-900 mb-2">
                        {termsData.welcome}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        {termsData.welcomeDescription}
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="space-y-10">
                    {termsData.sections.map((section, index) => (
                        <motion.div key={index} variants={fastCardVariants}>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                {section.heading}
                            </h2>

                            {/* Content paragraphs */}
                            {section.content.length > 0 && (
                                <div className="space-y-2 mb-3">
                                    {section.content.map((paragraph, pIndex) => (
                                        <p key={pIndex} className="text-gray-600 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {/* Bullet points */}
                            {section.bullets && section.bullets.length > 0 && (
                                <ul className="list-disc pl-6 space-y-2 mb-3">
                                    {section.bullets.map((bullet, bIndex) => (
                                        <li key={bIndex} className="text-gray-600 leading-relaxed">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Footer text */}
                            {section.footer && (
                                <p className="text-gray-600 leading-relaxed mt-2">
                                    {section.footer}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
