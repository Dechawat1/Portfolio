import Link from "next/link"
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/Projects';

export default function Projects () {
    return (
        <section id="projects" className="mt-24">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold relative ">
                    <span className="text-primary">#</span>Projects
                    <span className="absolute -right-30 bottom-1/2 -translate-y-1/2 w-26 h-px bg-primary"></span>
                </h2>
              
            </div>
            <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 p-4">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                  
            </div>
        </section>
    )
}
