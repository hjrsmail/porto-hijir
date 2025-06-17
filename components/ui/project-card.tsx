import Image from "next/image";
import GithubWhiteIcon from "../icons/github-white-icon";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";


interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    author: string;
    date: string;
    url?: string;
    github?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    image, title, description, author, date, url, github
}) => {
    return (
        <div className="flex flex-col space-y-3 z-10">
            <a href="#_" className="block transition-all duration-300 ease-in-out hover:scale-105">
                <Image
                    priority={true}
                    className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 brightness-70 hover:brightness-100"
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                />
            </a>
            <h2 className="text-lg font-bold sm:text-lg md:text-xl bg-darkk/50 rounded-md py-1">
                <a href="#_">{title}</a>
            </h2>
            {/* <p className="text-sm">
                {description.length > 25 ? description.slice(0, 25) + '...' : description}
            </p> */}
            <p className=" text-xs font-medium inline-flex gap-2 items-center">
                <a href="#_" className="mr-1">{author}</a>
                · <span className="mx-1">{date}</span>
                ·
                {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRightIcon className="size-5 mr-1" />
                    </a>
                )}
                <span className="mr-1"> · </span>
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <GithubWhiteIcon className="w-6 h-6" color="fill-gray-800 dark:fill-white" />
                    </a>
                )}
            </p>

        </div>
    );
};

export default ProjectCard;