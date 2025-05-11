'use client'
import { motion } from "framer-motion";
import { experience } from "@/data/Experience"



export default function ExperienceCard() {
    const fadeVariant = (direction = "left") => {
        return {
            hidden: {
                opacity: 0,
                x: direction === "left" ? -100 : 100,
            },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.6,
                    ease: "easeOut",
                },
            },
        };
    };
    return (
        <div className="flex flex-col gap-12 max-w-4xl mx-auto relative z-10 pt-6">
            {experience.map((item) => {
                const isLeft = item.id % 2 === 0;
                return (
                    <div
                        key={item.id}
                        className="flex flex-col md:flex-row items-center justify-between md:gap-0 gap-4  "
                    >
                        {/* เส้นกลาง */}
                        < motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-500 transform -translate-x-1/2"
                        />
                        {/* ซ้าย */}
                        <div className={`w-full md:w-5/12  ${isLeft ? "" : "hidden md:block"}`}>
                            {isLeft && (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={fadeVariant("left")}
                                    className="bg-gradient-to-br from-gray-900 to-black border border-purple-900/30  rounded-lg p-5 text-start shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform duration-300"
                                >
                                    <h1 className="font-bold text-lg  bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">{item.title}</h1>
                                    <h3 className="font-bold text-lg text-gray-300 mb-1">{item.role}</h3>
                                    <p className="text-sm text-white">{item.date}</p>
                                    <p className="mt-2 text-gray-300 leading-relaxed text-sm whitespace-pre-line">{item.responsible}</p>
                                </motion.div>
                            )}
                        </div>

                        {/* จุดกลาง */}
                        <div className="hidden md:flex relative z-10"> <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75"></span> <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-200 border-4 border-black"></span> </div>

                        {/* ขวา */}
                        <div className={`w-full md:w-5/12 ${isLeft ? "hidden md:block" : ""}`}>
                            {!isLeft && (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={fadeVariant("right")}
                                    className="bg-gradient-to-tl from-gray-900 to-black border border-purple-900/30  rounded-lg p-5 text-start shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform duration-300"
                                >
                                    <h1 className="font-bold text-lg  bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">{item.title}</h1>
                                    <h3 className="font-bold text-lg text-gray-300 mb-1">{item.role}</h3>
                                    <p className="text-sm text-white">{item.date}</p>
                                    <p className="mt-2 text-gray-300 leading-relaxed text-sm whitespace-pre-line">{item.responsible}</p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
