import ExperienceCard from "./ExperienceCard";



export default function Experience() {
    return (
        <section id="experience" className="mt-24">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold relative">
                    <span className="text-primary ">#</span>Experience
                    <span className="absolute -right-30 bottom-1/2 -translate-y-1/2 w-26 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
                </h2>
            </div>
            <div className="flex flex-col  justify-center   relative px-4 py-16">
                <div className="">
                    <ExperienceCard />
                </div>
            </div>

        </section>
    )
}

