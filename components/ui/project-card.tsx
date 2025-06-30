import React from "react";
import Image from "next/image";
import GithubWhiteIcon from "../icons/github-white-icon";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Project } from "@/types";

interface Props {
    project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <article className="flex flex-col space-y-2 md:space-y-3 z-10">
            <div className="transition-all duration-300 ease-in-out hover:scale-105">
                <Image
                    // priority={true}
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full mb-1 md:mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 brightness-70 hover:brightness-100"
                />
            </div>

            <h2 className="text-sm font-bold sm:text-lg md:text-xl bg-darkk/50 rounded-md pt-1">
                {project.title}
            </h2>

            {/* Tampilkan deskripsi jika diperlukan */}
            {/* <p className="text-sm text-gray-600 dark:text-gray-400">
        {description.length > 80 ? description.slice(0, 80) + "..." : description}
      </p> */}

            <p className="text-xs font-medium inline-flex flex-wrap items-center gap-1 text-gray-700 dark:text-gray-300">
                <span>{project.author}</span>
                <span>·</span>
                <span>{project.date}</span>

                {project.url && (
                    <>
                        <span>·</span>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Project URL"
                            className="inline-flex items-center"
                        >
                            <ArrowUpRightIcon className="w-5 h-5" />
                        </a>
                    </>
                )}

                {project.github && (
                    <>
                        <span>·</span>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="inline-flex items-center"
                        >
                            <GithubWhiteIcon className="w-6 h-6 fill-gray-800 dark:fill-white" />
                        </a>
                    </>
                )}
            </p>
        </article>
    );
};

export default ProjectCard;
