'use client';

import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import MyPicture from '@/public/images/pict.jpg'
import CodePictures from '@/public/images/code.png'
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";
import { SmoothCursor } from '@/components/ui/smooth-cursor';

export default function Hero() {

    const strongRef = useRef<HTMLDivElement>(null);

    // Fungsi untuk split karakter jadi span
    const splitCharactersIntoSpans = (element: HTMLElement) => {
        const text = element.innerHTML;
        const modifiedHTML: string[] = [];

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const attributes = char.trim() ? "class='inline-block'" : '';
            modifiedHTML.push(`<span ${attributes}>${char}</span>`);
        }
        element.innerHTML = modifiedHTML.join('');
    };

    // Animasi GSAP
    const animateText = () => {
        if (!strongRef.current) return;
        const children = strongRef.current.children;

        gsap.fromTo(children, { opacity: 0, scale: 4 }, { opacity: 1, scale: 1, stagger: 0.2, duration: 1, ease: 'expo.out' });
    };

    useEffect(() => {
        if (!strongRef.current) return;

        const el = strongRef.current;
        const originalText = el.textContent || '';

        splitCharactersIntoSpans(el);
        el.classList.remove('invisible');
        animateText();

        return () => {
            el.innerHTML = originalText; // cleanup on unmount
        };
    }, []);

    return (
        <div
            id="home"
            className="duration-300 relative flex flex-col-reverse items-center px-4 py-10 sm:px-6 md:grid md:h-[1150px] 3xl:h-fit md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:px-2 lg:py-12">
            <SmoothCursor />
            
            {/* Text */}
            <div
                className="duration-000 flex max-w-4xl flex-col items-center pt-20 transition-all ease-out md:ml-6 md:items-start md:pt-0 lg:col-span-2">
                <h1 className="text-3xl text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-300">
                    <strong ref={strongRef} className="invisible ">
                        Hijir Ismail
                    </strong>
                </h1>

                <div className="absolute top-37 left-115 z-0 hidden transform-3d lg:block">
                    <Image
                        priority={true}
                        src={CodePictures}
                        placeholder="empty"
                        className="rotate-x-10 w-100 -rotate-y-15 rotate-z-10 rounded-lg duration-500 hover:-translate-x-10 hover:translate-y-10 hover:translate-z-10 hover:rotate-x-0 hover:rotate-y-0 hover:rotate-z-0"
                        alt="codeimg"
                    />
                </div>

                <div className="flst inline-items mt-3 flex  items-center gap-3 text-base text-pretty text-gray-700 sm:text-2xl/relaxed md:gap-5 dark:text-gray-200">
                    <CodeBracketIcon className='size-5 text-blue-500 hover:text-white md:size-8' />
                    <p className="text-lg md:text-xl  from-blue-400 to-purple-500 bg-clip-text text-black duration-100 hover:bg-gradient-to-r hover:text-transparent dark:text-gray-300">
                        Fullstack Developer
                    </p>
                </div>

                {/* Deskripsi */}
                <div className="text-darkk w-auto p-2 text-justify text-base text-pretty md:text-lg/relaxed dark:text-gray-400">
                    Saya adalah seorang web developer dengan minat di bidang frontend & backend, serta pengalaman membangun aplikasi berbasis
                    Laravel Tailwind CSS, Bootstrap. Saat ini sedang menambah wawasan di bidang frontend dengan mempelajari library React dengan menggunakan Typescript.
                </div>

                <div className="prtf mt-4 flex flex-col gap-4 text-center sm:mt-6 md:flex-row">
                    {/* <div className="custom-mini:block absolute top-40 -left-40 z-0 hidden h-60 w-60 rounded-full bg-blue-600 opacity-20 blur-xl dark:bg-purple-600"></div> */}

                    <a
                        href="/portofolio"
                        className="group relative inline-block overflow-hidden rounded border border-gray-800 bg-blue-500 px-5 py-4 font-medium text-black shadow-sm transition-all duration-300 hover:scale-105 dark:text-gray-300">
                        <span className="block transition duration-300 group-hover:opacity-0">Lihat Karya Saya &mdash;&raquo;</span>
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl opacity-0 transition duration-300 group-hover:-translate-x-1 group-hover:-translate-y-5 group-hover:opacity-100">
                        </span>
                    </a>

                    <a
                        href="/contact"
                        className="group relative inline-block overflow-hidden rounded border border-gray-800 px-5 py-4 font-medium text-black shadow-sm transition-all duration-300 hover:scale-105 dark:text-gray-300">
                        <span className="block transition duration-300">Hubungi Saya</span>
                    </a>
                </div>
                {/* Terminal */}
                <div className="hidden md:block md:w-full mt-7 pr-5">
                    <Terminal>
                        <TypingAnimation>terminal@hjrsmail&gt; npx create-next-app@latest</TypingAnimation>

                        <TypingAnimation delay={3000} >
                            terminal@hjrsmail&gt; cd porto-hijir
                        </TypingAnimation>

                        <TypingAnimation delay={5000} >
                            terminal@hjrsmail&gt;porto-hijir&gt; npm install framer-motion
                        </TypingAnimation>

                        <TypingAnimation delay={9000} >
                            terminal@hjrsmail&gt;porto-hijir&gt; npm run dev
                        </TypingAnimation>

                        <AnimatedSpan delay={12000} >
                            <span>✔ Compiled in 118ms</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={13000} className="text-green-500">
                            <span>Welcome to My Portofolio</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={15000} className="text-blue-500">
                            <span>ℹ Updated 1 file:</span>
                            <span className="pl-2">- lib/utils.ts</span>
                        </AnimatedSpan>
                    </Terminal>
                </div>
            </div>

            {/* Gambar */}
            <div
                id="myPict"
                className="flex mx-auto scale-110 justify-center pt-20 transition-all duration-500 ease-out md:items-center md:pt-1"
            >
                <Image priority={true}
                    src={MyPicture}
                    placeholder="empty"
                    alt="myphoto"
                    className="rounded-full brightness-80 duration-400 hover:brightness-100 w-50 md:w-80"
                />
            </div>
        </div>
    )
}   