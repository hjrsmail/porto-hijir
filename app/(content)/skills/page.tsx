"use client";

import { useEffect, useState } from "react";
import React from "react";
import Image_1 from "@/public/images/sertif1.webp";
import Image_2 from "@/public/images/sertif2.webp";
import Image_3 from "@/public/images/sertif3.webp";
import Image_4 from "@/public/images/sertif4.webp";
import Image_5 from "@/public/images/sertif5.webp";
import Image_6 from "@/public/images/sertif6.webp";
import Image_7 from "@/public/images/sertif7.webp";
import Image_8 from "@/public/images/sertif8.webp";
import Image_9 from "@/public/images/sertif9.webp";
import Image_10 from "@/public/images/sertif10.webp";
import Image_11 from "@/public/images/sertif11.webp";
import Image_12 from "@/public/images/sertif12.webp";
import Image_13 from "@/public/images/sertif13.webp";
import Image_14 from "@/public/images/sertif14.webp";
import Image_15 from "@/public/images/sertif15.webp";
import SkillsGridOne from "@/components/layouts/partials/skills-one-layout";
import SkillsGridTwo from "@/components/layouts/partials/skills-two-layout";
import CertificateCard from "@/components/ui/certificate-card";
import OrbitCircle from "@/components/ui/orbit-circle";
import BlurText from "@/src/blocks/TextAnimations/BlurText/BlurText";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import { ShinyButton } from "@/src/components/magicui/shiny-button";

type Tab = 'pageOne' | 'pageTwo' | 'pageThree';

export default function Skills() {
    const certificateData = [
        { picture: Image_1 },
        { picture: Image_2 },
        { picture: Image_3 },
        { picture: Image_4 },
        { picture: Image_5 },
        { picture: Image_6 },
        { picture: Image_7 },
        { picture: Image_8 },
        { picture: Image_9 },
        { picture: Image_10 },
        { picture: Image_11 },
        { picture: Image_12 },
        { picture: Image_13 },
        { picture: Image_14 },
        { picture: Image_15 },


    ];

    const BATCH_SIZE = 6;
    const [displayedCertificates, setDisplayedCertificates] = useState(certificateData.slice(0, BATCH_SIZE));
    const [hasMore, setHasMore] = useState(certificateData.length > BATCH_SIZE);
    const [activeTab, setActiveTab] = useState<Tab>("pageOne");
    const [selectedCertificate, setSelectedCertificate] = useState<{ picture: any } | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (certificate: { picture: any }) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };


    // close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };


    // Disable Scroll When Modal is Open
    // useEffect(() => {
    //     if (isModalOpen) {
    //         document.body.classList.add("overflow-hidden");
    //     } else {
    //         document.body.classList.remove("overflow-hidden");
    //     }

    //     return () => {
    //         document.body.classList.remove("overflow-hidden");
    //     };
    // }, [isModalOpen]);


    // const fetchMoreCertificates = () => {
    //     console.log("fetchMoreCertificates called");
    //     const nextBatch = certificateData.slice(displayedCertificates.length, displayedCertificates.length + BATCH_SIZE);
    //     if (nextBatch.length === 0) return; // no more data
    //     setDisplayedCertificates(prev => [...prev, ...nextBatch]);
    // };

    const loadMore = () => {
        const nextBatch = certificateData.slice(displayedCertificates.length, displayedCertificates.length + BATCH_SIZE);
        setDisplayedCertificates(prev => [...prev, ...nextBatch]);
        if (displayedCertificates.length + nextBatch.length >= certificateData.length) {
            setHasMore(false); // sudah habis
        }
    };

    //   if (activeTab !== "pageTwo") return null;



    return (
        <section id="skills" className=" relative bg-transparent px-4 py-10 sm:px-6 sm:py-12 lg:py-8 lg:mb-10 lg:px-0 lg:min-h-[700px]">
            {/* <div className="absolute w-60 h-60 top-18 bg-purple-950 dark:bg-orange-600 opacity-10 blur-xl rounded-full z-0" /> */}
            {/* Background Pattern */}
            {/* <DotPattern
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
            /> */}
            <div className="flex flex-col justify-center items-center text-center py-6">
                {/* <p className="text-2xl sm:text-4xl md:text-6xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    My Skill
                </p> */}

                {/* <p className="text-md pt-1 md:text-lg font-light text-black dark:text-gray-400">
                    A quick look at what I can do
                </p> */}

                <BlurText
                    text="My Skill"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-2xl sm:text-4xl md:text-6xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
                />

                <BlurText
                    text="A quick look at what I can do"
                    delay={300}
                    animateBy="words"
                    direction="top"
                    className="ext-md pt-1 md:text-lg font-light text-black dark:text-gray-400"
                />

            </div>

            <div className="w-full mx-auto pb-12 px-5 text-black dark:text-gray-300">
                {/* Navigation */}
                <div className="pb-6 flex justify-center py-6 md:gap-10">
                    <button
                        onClick={() => setActiveTab('pageOne')}
                        className={`px-4 py-2 text-sm md:text-md md:text-xl rounded hover:scale-110 duration-500 ${activeTab === 'pageOne' ? 'text-orange-500' : 'hover:text-orange-500'
                            }`}>
                        Tech Stack
                    </button>
                    <button
                        onClick={() => setActiveTab('pageTwo')}
                        className={`px-4 py-2 text-sm md:text-md md:text-xl rounded hover:scale-110 duration-500 ${activeTab === 'pageTwo' ? 'text-pink-500' : 'hover:text-pink-500'
                            }`}>
                        Certificate
                    </button>
                    {/* <button
                        onClick={() => setActiveTab('pageThree')}
                        className={`px-4 py-2 text-sm md:text-md md:text-xl rounded hover:scale-110 duration-500 ${activeTab === 'pageThree' ? 'text-purple-500' : 'hover:text-purple-500'
                            }`}
                    >
                        Certificate
                    </button> */}
                </div>

                {/* Tab Content */}
                {activeTab === 'pageOne' && (
                    <OrbitCircle />
                )}

                {/* {activeTab === 'pageTwo' && (
                    <SkillsGridTwo />
                )} */}

                {activeTab === "pageTwo" && (
                    <>
                        <InfiniteScroll
                            next={loadMore}
                            dataLength={displayedCertificates.length}
                            hasMore={false}
                            loader={null}
                            className="flex flex-wrap justify-center gap-x-0 md:gap-x-5 lg:gap-x-4 gap-y-4 px-2"
                        >
                            {displayedCertificates.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="w-full md:w-[48%] lg:w-[30%] flex justify-center"
                                >
                                    <CertificateCard picture={item.picture} onClick={() => openModal(item)} />
                                </motion.div>
                            ))}
                        </InfiniteScroll>

                        {hasMore && (
                            <div className="flex justify-center mt-6">
                                <ShinyButton
                                    onClick={loadMore}
                                    className="px-6 py-2 text-white rounded-md"
                                >
                                    Load More
                                </ShinyButton>
                            </div>
                        )}
                    </>
                )}

            </div>

            {isModalOpen && selectedCertificate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl mx-4 w-full overflow-hidden shadow-lg relative"
                        onClick={(e) => e.stopPropagation()} // Supaya klik gambar gak nutup modal
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 text-xl"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <Image
                            src={selectedCertificate.picture.src}
                            width={1200}
                            height={800}
                            alt="Certificate"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            )}


        </section >
    )
};


