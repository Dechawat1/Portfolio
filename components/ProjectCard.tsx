"use client"
import React, { useState } from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import SkillTag from './SkillTag';

// กำหนด type สำหรับ project
interface ProjectProps {
    id: number;
    title: string;
    description: string;
    language: { name: string; type: string; }[]
    image: string;
    live: string;
    github: string;
    figma: string;
}

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
    const MAX_VISIBLE = 4; // จำนวนที่แสดงเริ่มต้น
    const [showAll, setShowAll] = useState(false);

    const visibleLangs = showAll
        ? project.language
        : project.language.slice(0, MAX_VISIBLE);

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-lg overflow-hidden shadow-lg shadow-purple-500/20 hover:scale-110 transition delay-75 duration-300 flex flex-col h-full  ">
            <div className="relative h-48 w-full flex items-center justify-center overflow-hidden bg-gradient-to-t from-black/70 to-transparent hover:hover:scale-110 transition-transform duration-300">
                <a href={project.image} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg cursor-pointer"
                    />
                </a>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                {/* แสดง language tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {visibleLangs.map((lang, index) => (
                        <SkillTag key={index} name={lang.name} type={lang.type as any} />
                    ))}
                    {project.language.length > MAX_VISIBLE && (
                        <div className="ml-auto">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="text-sm underline hover:opacity-80 transition text-purple-400 hover:text-purple-300"
                            >
                                {showAll ? "Show less" : "Show more"}
                            </button>
                        </div>
                    )}
                </div>
                
                <h2 className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{project.title}</h2>
                <p className="text-gray-300 leading-relaxed mt-2 text-sm flex-grow">{project.description}</p>

                <div className="mt-4 flex justify-center gap-x-4">
                    {project.live && ( 
                        <Link href={project.live} className="text-center p-2 w-18 font-semibold rounded-2xl hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-purple-600 to-pink-600" target='_blank'>
                            Live
                        </Link>
                    )}
                    {project.github && (
                        <Link href={project.github} target='_blank' className="p-2 w-18 font-semibold text-center rounded-2xl hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-gray-800 to-gray-900 text-purple-300">
                            Github
                        </Link>
                    )}
                    {project.figma && (
                        <Link href={project.figma} target='_blank' className="text-center p-2 w-18 font-semibold rounded-2xl hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-purple-600 to-pink-600">
                            Figma
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;