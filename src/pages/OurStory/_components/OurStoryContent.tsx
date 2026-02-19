import { motion } from "framer-motion";
import {
    sequentialStaggerVariants,
    fastCardVariants,
    headingVariants,
    headingViewport,
    defaultViewport,
} from "@/lib/animations";

function OurStoryContent() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">

            {/* Section label */}
            <motion.h2
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={headingViewport}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
            >
                How It All <span className="text-primary">Began</span>
            </motion.h2>

            {/* Paragraphs — one by one, sequential stagger */}
            <motion.div
                variants={sequentialStaggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed"
            >
                <motion.p variants={fastCardVariants}>
                    Each year, thousands of students and professionals move from abroad or
                    within Ireland, whether for education, career advancement, or a fresh
                    start. These transitions come with the need for temporary,
                    medium-term accommodation, lasting from a few months to a couple of
                    years.
                </motion.p>

                <motion.p variants={fastCardVariants}>
                    Back in 2014, we realised that finding medium-term let accommodation
                    that balances affordability, comfort, and flexibility was very
                    difficult. Traditional accommodation options were limited to only two
                    choices: expensive short-term stays in hotels or permanent leases.
                </motion.p>

                <motion.p variants={fastCardVariants}>
                    Recognising this need, we founded Hosting Power in Dublin in June 2014
                    with a clear mission:{" "}
                    <strong className="text-gray-900">
                        to put medium-term rentals on the map.
                    </strong>
                </motion.p>

                <motion.p variants={fastCardVariants} className="font-semibold text-gray-900">
                    While doing so, we've remained committed to two core beliefs that
                    guide everything we do:
                </motion.p>

                {/* Bullet points — stagger inside */}
                <motion.ul
                    variants={sequentialStaggerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="list-disc pl-6 space-y-3"
                >
                    <motion.li variants={fastCardVariants}>
                        We believe that medium-term rentals are an essential option in the
                        accommodation market. The choices shouldn't be limited to two
                        extremes—expensive hotels or permanent leases.
                    </motion.li>
                    <motion.li variants={fastCardVariants}>
                        Temporary medium-term lets should offer the same standards as
                        permanent accommodations. Temporary housing should never mean having
                        to accept substandard accommodation or pay inflated prices.
                    </motion.li>
                </motion.ul>

                <motion.p variants={fastCardVariants}>
                    More than a decade later, Hosting Power stands as one of the largest
                    accommodation providers in Ireland, offering over 10,000 rooms across
                    the country, all available for medium-term rental.
                </motion.p>

                <motion.ul
                    variants={sequentialStaggerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="list-disc pl-6 space-y-2"
                >
                    <motion.li variants={fastCardVariants}>
                        Our rooms are affordable as our rents are indexed to the market price.
                    </motion.li>
                    <motion.li variants={fastCardVariants}>
                        Our rooms are comfortable as we have set strict quality standards.
                    </motion.li>
                </motion.ul>

                <motion.p variants={fastCardVariants}>
                    Join the tens of thousands of guests from Ireland and over 150
                    countries worldwide who have, since 2014, chosen Hosting Power for
                    their move.
                </motion.p>

                <motion.p variants={fastCardVariants} className="font-semibold text-primary text-xl">
                    We are powering your next move.
                </motion.p>

                <motion.p variants={fastCardVariants} className="font-bold text-gray-900 text-xl">
                    We are Warm Welcome.
                </motion.p>
            </motion.div>
        </section>
    );
}

export default OurStoryContent;
