'use client';
import React from 'react';
import Card from "@/components/ui/project-card";
import { get } from '@/server/projects';
import { useEffect, useState } from 'react';



export default function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        get()
            .then(setProjects)
            .catch(err => console.error(err));
    }, []);

    const res = projects;

    return (

        <div
            id="project"
            className="relative bg-transparent px-4 py-10 sm:px-6 sm:py-12 lg:py-8 lg:px-2 lg:min-h-[750px]"
        >
            <div className="flex flex-col justify-center items-center text-center py-6">
                <p className="text-2xl sm:text-4xl md:text-6xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Project Experience
                </p>
                <p className="text-md pt-1 md:text-lg font-light text-black dark:text-gray-400">
                    Explore My Past Project Experience
                </p>
            </div>

            <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-8 max-w-7xl text-black dark:text-gray-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                    {res && res.length > 0 ? (
                        res.map((project: any) => (
                            <Card
                                key={project.id}
                                image={project.project_image}
                                title={project.project_title}
                                description={project.project_description ?? "No description"}
                                author={project.author ?? "Unknown"}
                                url={project.project_url}
                                date={new Date(project.project_date).toDateString()}
                                github={project.project_github}
                            />

                        ))
                    ) : (
                        <p className='text-black italic dark:text-gray-500'>No projects found.</p>
                    )}

                    {/* <div
                        className="absolute w-60 h-60 right-7 top-20 bg-pink-950 dark:bg-pink-600 opacity-20 dark:opacity-10 blur-xl rounded-full z-0">
                    </div> */}
                </div>
            </div>
        </div>
    );
}
