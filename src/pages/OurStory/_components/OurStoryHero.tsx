import storyBg from "@/assets/our-stroy/our-story.jpg";

function OurStoryHero() {
    return (
        <section
            className="
        max-w-7xl mx-auto
        relative 
        flex 
        flex-col 
        justify-center 
        items-center 
        text-center
        px-8 
        md:px-16 
        h-[350px] 
        rounded-[30px] 
        overflow-hidden 
        m-4 
        bg-center 
        bg-cover 
        bg-no-repeat
      "
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${storyBg})`,
            }}
        >
            <div className="max-w-3xl space-y-4">
                <h1 className="text-white font-bold text-[36px] md:text-[56px] leading-[1.1]">
                    Our Story
                </h1>
            </div>
        </section>
    );
}

export default OurStoryHero;
