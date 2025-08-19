import React from "react";
import Image from "next/image";
import GithubWhiteIcon from "../icons/github-white-icon";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Project } from "@/types";
import Link from "next/link";

const ProjectCard = ({
    project,
    onClick,
}: {
    project: Project;
    onClick: () => void;
}) => {
    // Format tanggal (hanya tanggal, tanpa jam)
    const formattedDate = new Date(project.created_at).toLocaleDateString(
        "id-ID",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );

    return (
        <article
            onClick={onClick}
            className="flex flex-col z-10 rounded-md shadow-xs shadow-gray-400 
             dark:shadow-blue-800/50 transition-all duration-300 ease-in-out 
             hover:scale-105 brightness-70 hover:brightness-100 dark:brightness-100"
        >
            <div>
                <Image
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full mb-1 md:mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                />
            </div>

            {/* Bagian title */}
            <div className="px-4">
                <h2 className="text-sm font-bold sm:text-lg dark:bg-darkk/50 
                   rounded-md py-2">
                    {project.title}
                </h2>
            </div>

            {/* Bagian meta (author, tanggal, link) */}
            <div className="mt-auto px-4 pb-4">
                <p className="text-xs font-medium inline-flex flex-wrap items-center gap-1 
                  text-gray-700 dark:text-gray-300">
                    <span>{project.author}</span>
                    <span>·</span>
                    <span>{formattedDate}</span>

                    {project.demo_url && (
                        <>
                            <span>·</span>
                            <Link
                                href={project.demo_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Project URL"
                                className="inline-flex items-center"
                            >
                                <ArrowUpRightIcon className="w-5 h-5" />
                            </Link>
                        </>
                    )}

                    {project.github_url && (
                        <>
                            <span>·</span>
                            <Link
                                href={project.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Repository"
                                className="inline-flex items-center"
                            >
                                <GithubWhiteIcon className="w-6 h-6 fill-gray-800 dark:fill-white" />
                            </Link>
                        </>
                    )}
                </p>
            </div>
        </article>

    );
};

export default ProjectCard;
