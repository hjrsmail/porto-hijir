"use client";

import { useState } from "react";
import React from "react";
import Image_1 from "@/public/images/sertif1.png";
import Image_2 from "@/public/images/sertif2.png";
import Image_3 from "@/public/images/sertif3.png";
import SkillsGridOne from "@/components/layouts/partials/skills-one-layout";
import SkillsGridTwo from "@/components/layouts/partials/skills-two-layout";
import CertificateCard from "@/components/ui/certificate-card";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";


export default function Skills() {
    type Tab = 'pageOne' | 'pageTwo' | 'pageThree';
    const [activeTab, setActiveTab] = useState<Tab>('pageOne');
    return (
        <section id="skills" className="relative bg-transparent px-4 py-10 sm:px-6 sm:py-12 lg:py-8 lg:mb-10 lg:px-2 lg:h-[700px]">
            {/* <div className="absolute w-60 h-60 top-18 bg-purple-950 dark:bg-orange-600 opacity-10 blur-xl rounded-full z-0" /> */}
            {/* Background Pattern */}
            {/* <DotPattern
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
            /> */}
            <div className="flex flex-col justify-center items-center text-center py-6">
                <p className="text-2xl sm:text-4xl md:text-6xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    My Skill
                </p>
                <p className="text-md pt-1 md:text-lg font-light text-black dark:text-gray-400">
                    A quick look at what I can do
                </p>
            </div>

            <div className="w-full mx-auto pb-12 px-5 text-black dark:text-gray-300">
                {/* Navigation */}
                <div className="pb-6 flex justify-center py-6 md:gap-10">
                    <button
                        onClick={() => setActiveTab('pageOne')}
                        className={`px-4 py-2 text-md md:text-xl rounded hover:scale-110 duration-500 ${activeTab === 'pageOne' ? 'text-orange-500' : 'hover:text-orange-500'
                            }`}>
                        Tech Stack
                    </button>
                    <button
                        onClick={() => setActiveTab('pageTwo')}
                        className={`px-4 py-2 text-md md:text-xl rounded hover:scale-110 duration-500 ${activeTab === 'pageTwo' ? 'text-pink-500' : 'hover:text-pink-500'
                            }`}>
                        Tools
                    </button>
                    <button
                        onClick={() => setActiveTab('pageThree')}
                        className={`px-4 py-2 text-md md:text-xl rounded hover:scale-110 duration-500 ${activeTab === 'pageThree' ? 'text-purple-500' : 'hover:text-purple-500'
                            }`}
                    >
                        Certificate
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'pageOne' && (
                    <SkillsGridOne />
                )}

                {activeTab === 'pageTwo' && (
                    <SkillsGridTwo />
                )}


                {activeTab === 'pageThree' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:pt-2 text-dark">
                        <CertificateCard picture={Image_1} />
                        <CertificateCard picture={Image_2} />
                        <CertificateCard picture={Image_3} />
                    </div>
                )}
            </div>
        </section >
    )
};


