

interface BlogHeroProps {
    title: string;
    heroImage: string;
}

export default function BlogHero({ title, heroImage }: BlogHeroProps) {
    return (
        <section
            className="
                max-w-7xl mx-auto
                relative flex flex-col justify-center items-center text-center
                px-8 md:px-16 h-[350px] rounded-[30px] overflow-hidden m-4
                bg-center bg-cover bg-no-repeat
            "
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${heroImage})`,
            }}
        >
            <h1 className="text-white font-bold text-[36px] md:text-[56px] leading-[1.1]">
                {title}
            </h1>
        </section>
    );
}
