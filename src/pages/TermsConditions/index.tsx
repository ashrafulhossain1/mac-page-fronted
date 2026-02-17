import { termsData } from "./data";

export default function TermsConditions() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-10 text-center">
                <span className="text-primary">Terms</span> & Conditions
            </h1>

            {/* Welcome */}
            <div className="mb-10">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                    {termsData.welcome}
                </p>
                <p className="text-gray-600 leading-relaxed">
                    {termsData.welcomeDescription}
                </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
                {termsData.sections.map((section, index) => (
                    <div key={index}>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                            {section.heading}
                        </h2>

                        {/* Content paragraphs */}
                        {section.content.length > 0 && (
                            <div className="space-y-2 mb-3">
                                {section.content.map((paragraph, pIndex) => (
                                    <p
                                        key={pIndex}
                                        className="text-gray-600 leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* Bullet points */}
                        {section.bullets && section.bullets.length > 0 && (
                            <ul className="list-disc pl-6 space-y-2 mb-3">
                                {section.bullets.map((bullet, bIndex) => (
                                    <li
                                        key={bIndex}
                                        className="text-gray-600 leading-relaxed"
                                    >
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
                    </div>
                ))}
            </div>
        </div>
    );
}
