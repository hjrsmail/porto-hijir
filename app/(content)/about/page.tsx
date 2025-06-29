"use client";

import Image from 'next/image'
import React from 'react'
import MyPicture from '@/public/images/pict.webp'
import ButtonLink from '@/components/ui/button-link'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
// import { Meteors } from "@/components/magicui/meteors";


export default function About() {
    return (
        <section id="about" className="relative bg-transparent px-4 py-10 sm:px-6 sm:py-1 lg:px-2 lg:pb-16">
            {/* <Meteors number={10} /> */}
            {/* Title */}
            <div className="flex flex-col items-center justify-center py-6 text-center">
                <p className="text-shadow-lg bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 bg-clip-text text-2xl text-transparent sm:text-4xl md:text-6xl">
                    About Me
                </p>
                <p className="text-md pt-1 font-light text-black md:text-lg dark:text-gray-400">Get to know me better</p>
            </div>

            {/* Content */}
            <div className="my-2 w-full text-black md:my-6 dark:text-gray-300">
                <div className="md:grid md:grid-cols-1 lg:grid-cols-4 lg:gap-x-6 lg:px-6">
                    {/* Image Section */}
                    <div className=" w-fit overflow-visible mx-auto">
                        <Image priority={true}
                            className="relative z-10 w-50 rounded-full brightness-80 duration-300 hover:brightness-100 md:w-80"
                            src={MyPicture}
                            alt="My Photo"
                        />
                    </div>

                    {/* Description Section */}
                    <div className="description my-4 flex rounded-r-4xl md:col-span-3">
                        <div className="mx-auto w-auto max-w-7xl gap-6 text-justify brightness-80">
                            <div className="text-description flex flex-col gap-6">
                                <div className="t-top duration-200 dark:hover:text-white">
                                    Saya merupakan fresh graduate dari Universitas Negeri Makassar pada Jurusan Teknik
                                    Informatika dan Komputer dengan IPK 3,95 dan masa studi 3 tahun 4 bulan. Saat ini
                                    saya mampu mengembangkan sistem informasi berbasis web serta dapat mengerjakan
                                    administrasi perkantoran seperti pengarsipan dan penginputan data. Saya juga
                                    aktif belajar teknologi baru dan senang menyelesaikan tantangan teknis secara
                                    sistematis.
                                </div>
                                <div className="t-bot duration-100 dark:hover:text-white">
                                    Selain itu, saya memiliki pengetahuan dasar maintenance software/hardware pada laptop/PC. Saya dapat bekerja secara mandiri maupun dalam tim, mengutamakan
                                    kedisiplinan, dan terbiasa bekerja dengan tenggat waktu yang jelas. Saya
                                    juga memiliki kemampuan komunikasi yang baik, mudah beradaptasi di lingkungan
                                    baru, dan selalu berinisiatif dalam menyelesaikan pekerjaan. Dengan latar belakang
                                    pendidikan dan keterampilan yang saya miliki, saya siap untuk terus berkembang dan
                                    berkontribusi dalam berbagai proyek dan tantangan baru.
                                </div>
                            </div>

                            {/* Blur background */}
                            {/* <div className="absolute top-20 right-5 z-0 h-60 w-60 rounded-full opacity-20 blur-xl bg-pink-600 dark:bg-purple-600" /> */}

                            {/* Cards */}
                            <div className="animated fadeIn mx-auto w-full max-w-7xl items-center md:mt-2 lg:inline-flex">
                                <div className="mx-auto grid w-auto grid-cols-3 items-center justify-center gap-3 p-3 md:p-6">
                                    {[
                                        { title: '1+', desc: 'Years of Experience' },
                                        { title: '3', desc: 'Project Created' },
                                        { title: '5+', desc: 'Certificate' },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-gray-800 p-2 md:p-6"
                                        >
                                            <div className="text-sm sm:text-2xl md:mb-1">{item.title}</div>
                                            <p className="text-center text-xs sm:text-lg">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Education & Experience */}
                            <div className="animated fadeIn mx-auto w-full max-w-7xl items-center lg:inline-flex">
                                <div className="max-w mx-auto grid w-full grid-cols-2 items-center justify-center gap-3 p-3 md:p-6">
                                    {/* Education */}
                                    <div className="h-full w-full rounded-2xl border border-gray-800 p-4 md:p-6">
                                        <div className="mb-2 flex items-center gap-1 md:gap-4">
                                            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full p-2 text-blue-500 md:bg-gray-900">
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
                                    <div className="h-full w-full rounded-2xl border border-gray-800 p-4 md:p-6">
                                        <div className="mb-2 flex items-center gap-1 md:gap-4">
                                            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full p-2 text-blue-500 md:bg-gray-900">
                                                <BriefcaseIcon className="size-4 md:size-6" />
                                            </span>
                                            <h1 className="custom-mini:text-xs text-md font-semibold md:text-xl">Experience</h1>
                                        </div>
                                        <ul className="relative space-y-6 border-l border-gray-300 text-start">
                                            <li className="relative">
                                                <span className="absolute -left-1.5 h-3 w-3 rounded-full bg-blue-500"></span>
                                                <div className="ml-3 text-sm custom-mini:text-xs font-black sm:text-lg">Freelance Programmer</div>
                                                <p className="ml-3 text-sm custom-mini:text-xs">2024 - present</p>
                                                <p className="ml-3 text-sm custom-mini:text-xs">Remote Projects</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Download CV */}
                            <div className="flex flex-row justify-center gap-4 p-4 lg:justify-start">
                                <div className="cv-downloader">
                                    <ButtonLink href="/pdf/cv-new.pdf"
                                        className="hover:!bg-gray-800 duration-400 hover:text-gray-400 bg-pink-300 dark:bg-blue-500 "
                                        icon={<ArrowDownTrayIcon />}
                                    >
                                        <p className="md:text-md text-sm">Download CV</p>
                                    </ButtonLink>
                                </div>
                                <div className="project-link">
                                    <ButtonLink href="{{ url('portofolio') }}"
                                        className='text-blue-500 hover:bg-gray-800 duration-400 hover:text-gray-400'
                                        icon={<ArrowTopRightOnSquareIcon />}
                                    >
                                        <p className="md:text-md text-sm">See Portfolio</p>
                                    </ButtonLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
