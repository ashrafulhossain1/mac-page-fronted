import { privacyData } from "./data";
import { motion } from "framer-motion";
import {
    headingVariants,
    headingViewport,
    sequentialStaggerVariants,
    fastCardVariants,
    defaultViewport,
} from "@/lib/animations";

export default function PrivacyPolicy() {
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
                <span className="text-primary">Privacy</span> & Policy
            </motion.h1>

            <motion.div
                variants={sequentialStaggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
            >
                {/* Intro */}
                <motion.div variants={fastCardVariants} className="mb-10 space-y-2">
                    {privacyData.intro.map((text, index) => (
                        <p key={index} className="text-gray-600 leading-relaxed">
                            {text}
                        </p>
                    ))}
                </motion.div>

                {/* Sections */}
                <div className="space-y-10">
                    {privacyData.sections.map((section, index) => (
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

                            {/* Subsections (for section 2) */}
                            {section.subsections &&
                                section.subsections.map((sub, sIndex) => (
                                    <div key={sIndex} className="mt-5 mb-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {sub.subheading}
                                        </h3>
                                        {sub.content.length > 0 && (
                                            <div className="space-y-2 mb-2">
                                                {sub.content.map((text, tIndex) => (
                                                    <p key={tIndex} className="text-gray-600 leading-relaxed">
                                                        {text}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                        {sub.bullets && sub.bullets.length > 0 && (
                                            <ul className="list-disc pl-6 space-y-2">
                                                {sub.bullets.map((bullet, bIndex) => (
                                                    <li key={bIndex} className="text-gray-600 leading-relaxed">
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}

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
