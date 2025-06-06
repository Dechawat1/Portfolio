import Marquee from "react-fast-marquee";
import { skillsData } from "@/data/skillsData";
import { skillsImage } from "@/data/skillsImage";
import Image from "next/legacy/image";

const Skill = () => {

    return (
        <section id="#skills" className="mt-24 relative z-50  my-12 lg:my-24 ">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold relative ">
                    <span className="text-primary">#</span>Skills
                    <span className="absolute -right-30 bottom-1/2 -translate-y-1/2 w-26 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
                </h2>

            </div>
            
            <div className="w-full my-12">
                <Marquee
                    gradient={false}
                    speed={100}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    
                    {skillsData.map((skill, id) => (
                        <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                            key={id}>
                            <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                                <div className="flex -translate-y-[1px] justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <div className="h-8 sm:h-10">
                                        <Image
                                            src={skillsImage(skill)?.src}
                                            alt={skill}
                                            width={40}
                                            height={40}
                                            className="h-full w-auto rounded-lg"
                                        />
                                    </div>
                                    <p className="text-white text-sm sm:text-lg">
                                        {skill}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

        </section>
    )
}
export default Skill