"use client";

import Image from 'next/image'
import React from 'react'
import MyPicture from '@/public/images/pict.webp'
import ButtonLink from '@/components/ui/button-link'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { NumberTicker } from '@/src/components/magicui/number-ticker';
import BlurText from "@/src/blocks/TextAnimations/BlurText/BlurText";
import ScrollReveal from '@/src/blocks/TextAnimations/ScrollReveal/ScrollReveal';
import CircularGallery from '@/src/blocks/Components/CircularGallery/CircularGallery';
import ScrollRevealSimple from '@/src/blocks/TextAnimations/ScrollReveal/ScrollReveal';


// import { Meteors } from "@/components/magicui/meteors";


export default function About() {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <section id="about" className="relative bg-transparent px-4 py-10 sm:px-6 sm:py-1 lg:px-2 lg:pb-16">

            {/* <Meteors number={10} /> */}
            {/* Title */}
            <div className="flex flex-col items-center justify-center py-6 text-center">
                {/* <p className="text-shadow-lg bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 bg-clip-text text-2xl text-transparent sm:text-4xl md:text-6xl">
                    About Me
                </p> */}

                {/* <p className="text-md pt-1 font-light text-black md:text-lg dark:text-gray-400">Get to know me better</p> */}


                <BlurText
                    text="About Me"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-shadow-lg bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 bg-clip-text text-2xl text-transparent sm:text-4xl md:text-6xl"
                />

                <BlurText
                    text="Get to know me better"
                    delay={300}
                    animateBy="words"
                    direction="top"
                    className="text-md pt-1 font-light text-black md:text-lg dark:text-gray-400"
                />
            </div>

            {/* Content */}
            <div className="my-2 w-full text-black md:my-6 dark:text-gray-300">
                <div className="md:grid md:grid-cols-1 lg:grid-cols-4 lg:gap-x-6 lg:px-6">
                    {/* Image Section */}
                    {/* <div className=" w-fit overflow-visible mx-auto">
                        <Image priority={true}
                            className="relative z-10 w-50 rounded-full brightness-80 duration-300 hover:brightness-100 md:w-80"
                            src={MyPicture}
                            alt="My Photo"
                        />
                    </div> */}

                    {/* Description Section */}
                    <div className="description my-7 lg:my-4 flex rounded-r-4xl md:col-span-4">
                        <div className="mx-auto w-auto max-w-7xl gap-6 text-justify dark:text-gray-400">
                            <div className="text-description text-sm md:text-base flex flex-col gap-6 mb-2 md:mb-0 ">
                                <div className="t-top duration-200 dark:hover:text-white transition-colors">
                                    {/* <ScrollRevealSimple className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"> */}
                                    I am a fresh graduate from Universitas Negeri Makassar, majoring in Informatics and Computer Engineering, with a GPA of 3.95 and a study period of 3 years and 4 months. I am proficient in developing web-based information systems and experienced in office administration tasks such as archiving and data entry. I am also an active learner of new technologies and enjoy solving technical challenges in a systematic manner.
                                    {/* </ScrollRevealSimple> */}
                                </div>
                                <div className="t-bot duration-100 dark:hover:text-white">
                                    Additionally, I possess basic knowledge in software and hardware maintenance for laptops and PCs. I am accustomed to working both independently and in a team, upholding discipline, and completing tasks on time. I am communicative, adaptable, and take initiative in accomplishing tasks. I am ready to grow and contribute to various projects and new challenges.
                                </div>
                            </div>

                            {/* Blur background */}
                            {/* <div className="absolute top-20 right-5 z-0 h-60 w-60 rounded-full opacity-20 blur-xl bg-pink-600 dark:bg-purple-600" /> */}

                            {/* Cards */}
                            <div className="animated fadeIn mx-auto w-full max-w-7xl items-center md:mt-2 lg:inline-flex">
                                <div className="mx-auto grid w-auto grid-cols-3 items-center justify-center gap-3 p-3 md:p-6 ">
                                    {[
                                        { title: 2, desc: 'Years of Experience' },
                                        { title: 6, desc: 'Project Created' },
                                        { title: 25, desc: 'Certificate' },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex h-full w-full flex-col items-center justify-center rounded-2xl border shadow-lg dark:shadow-sm  dark:shadow-blue-800/50 border-zinc-200 dark:border-gray-900 p-2 md:p-6"
                                        >
                                            <NumberTicker
                                                value={item.title}
                                                className="text-sm md:text-xl lg:text-2xl md:mb-1"
                                            />

                                            {/* <div className="text-sm md:text-xl lg:text-2xl md:mb-1">{item.title}</div> */}
                                            <p className="text-center text-xs md:text-lg">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Education & Experience */}
                            <div className="animated fadeIn mx-auto w-full max-w-7xl items-center lg:inline-flex">
                                <div className="max-w mx-auto grid w-full grid-cols-2 items-center justify-center gap-3 p-3 md:p-6">
                                    {/* Education */}
                                    <div className="h-full w-full rounded-2xl border border-gray-300 dark:border-gray-800 p-4 md:p-6 shadow-lg dark:shadow-sm dark:shadow-blue-800/50">
                                        <div className="mb-2 flex items-center gap-1 md:gap-4">
                                            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full p-2 text-blue-500 md:bg-gray-300 dark:md:bg-gray-900">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-4 md:size-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                                    />
                                                </svg>
                                            </span>
                                            <h1 className="custom-mini:text-xs text-md font-semibold md:text-xl">Education</h1>
                                        </div>
                                        <ul className="relative space-y-6 border-l border-gray-300 text-start">
                                            <li className="relative">
                                                <span className="absolute -left-1.5 h-3 w-3 rounded-full bg-blue-500"></span>
                                                <div className="ml-3 custom-mini:text-xs text-sm font-black sm:text-lg">Bachelor of Informatic Engineering Education</div>
                                                <p className="ml-3 custom-mini:text-xs text-sm">2021 - 2025</p>
                                                <p className="ml-3 custom-mini:text-xs text-sm">Universitas Negeri Makassar</p>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Experience */}
                                    <div className="h-full w-full rounded-2xl border border-gray-300 dark:border-gray-800 p-4 md:p-6 shadow-lg dark:shadow-sm dark:shadow-blue-800/50">
                                        <div className="mb-2 flex items-center gap-1 md:gap-4">
                                            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full p-2 text-blue-500 md:bg-gray-300 dark:md:bg-gray-900">
                                                <BriefcaseIcon className="size-4 md:size-6" />
                                            </span>
                                            <h1 className="custom-mini:text-xs text-md font-semibold md:text-xl">Experience</h1>
                                        </div>
                                        <ul className="relative space-y-6 border-l border-gray-300 text-start">
                                            <li className="relative">
                                                <span className="absolute -left-1.5 h-3 w-3 rounded-full bg-blue-500"></span>
                                                <div className="ml-3 text-sm custom-mini:text-xs font-black sm:text-lg">Freelance Programmer</div>
                                                <p className="ml-3 text-sm custom-mini:text-xs">2024 - present</p>
                                                <p className="ml-3 text-sm custom-mini:text-xs break-words">Remote Projects @Gercep Technology</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Download CV */}
                            <div className="flex flex-row justify-center gap-4 p-4 lg:justify-start">
                                <div className="cv-downloader">
                                    <ButtonLink href="/pdf/cv-new.pdf"
                                        className=" dark:text-gray-300 hover:!bg-transparent duration-400 hover:!text-blue-500 bg-blue-500 "
                                        icon={<ArrowDownTrayIcon />}
                                    >
                                        <p className=" text-xs md:text-md ">Download CV</p>
                                    </ButtonLink>
                                </div>
                                <div className="project-link">
                                    <ButtonLink onClick={() => scrollToSection("project")}
                                        className='text-blue-500 hover:bg-blue-500 duration-400 hover:text-gray-200'
                                        icon={<ArrowTopRightOnSquareIcon />}
                                    >
                                        <p className="md:text-md text-xs">See Portfolio</p>
                                    </ButtonLink>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery bend={-2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
            </div> */}

        </section >
    )
}
