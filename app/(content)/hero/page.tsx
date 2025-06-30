// components/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import MyPicture from "@/public/images/pict.webp";
import CodePictures from "@/public/images/code.webp";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";
import GradientText from "@/src/blocks/TextAnimations/GradientText/GradientText";
import SplashCursor from "@/src/blocks/Animations/SplashCursor/SplashCursor";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Hero() {
    const nameRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const splitTextIntoSpans = (element: HTMLElement) => {
        const text = element.textContent || "";
        const spans = text
            .split("")
            .map((char) =>
                char.trim()
                    ? `<span class="inline-block">${char}</span>`
                    : char === " "
                        ? `<span>&nbsp;</span>`
                        : char
            )
            .join("");
        element.innerHTML = spans;
    };

    useEffect(() => {
        if (!nameRef.current) return;

        const el = nameRef.current;
        const originalText = el.textContent || "";
        splitTextIntoSpans(el);
        el.classList.remove("invisible");

        const tl = gsap.timeline();

        // Animasi nama karakter per karakter
        tl.fromTo(
            el.children,
            { opacity: 0, scale: 4 },
            { opacity: 1, scale: 1, stagger: 0.1, duration: 0.8, ease: "back.out(1.7)" }
        );

        // Text kontainer
        if (textRef.current) {
            tl.fromTo(
                textRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.5"
            );
        }

        // Gambar profil
        if (imageRef.current) {
            tl.fromTo(
                imageRef.current,
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
                "-=0.6"
            );
        }

        // Terminal
        if (terminalRef.current) {
            tl.fromTo(
                terminalRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
                "-=0.6"
            );
        }

        return () => {
            el.innerHTML = originalText;
        };
    }, []);

    return (
        <div
            id="home"
            className="duration-300 relative flex flex-col-reverse items-center px-4 py-10 sm:px-6 md:grid md:h-[1150px] md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:px-2 lg:py-12"
        >
            <SmoothCursor />
            <SplashCursor />

            {/* TEXT */}
            <div
                ref={textRef}
                className="flex max-w-4xl flex-col items-center pt-20 md:ml-6 md:items-start md:pt-0 lg:col-span-2"
            >
                <h1 className="text-3xl text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-300">
                    <strong ref={nameRef} className="invisible">
                        Hijir Ismail
                    </strong>
                </h1>

                <div className="absolute -top-25 left-115 z-0 hidden lg:block">
                    <Image
                        src={CodePictures}
                        alt="code"
                        placeholder="empty"
                        priority
                        className="rotate-x-10 w-100 -rotate-y-15 rotate-z-10 rounded-lg duration-500 hover:-translate-x-10 hover:translate-y-10 hover:translate-z-10 hover:rotate-x-0 hover:rotate-y-0 hover:rotate-z-0"
                    />
                </div>

                <div className="mt-3 flex items-center gap-3 text-base sm:text-2xl dark:text-gray-200">
                    <CodeBracketIcon className="size-5 text-blue-500 md:size-8" />
                    <GradientText
                        colors={["oklch(70.7% 0.165 254.624)", "oklch(62.7% 0.265 303.9)"]}
                        animationSpeed={3}
                        showBorder={false}
                    >
                        Fullstack Developer
                    </GradientText>
                </div>

                <p className="mt-4 text-justify text-sm md:text-lg dark:text-gray-400">
                    Saya adalah seorang web developer dengan minat di bidang frontend & backend, serta pengalaman membangun aplikasi berbasis Laravel, Tailwind CSS, Bootstrap. Saat ini saya sedang memperdalam React + TypeScript dan Next.js.
                </p>

                <div className="mt-6 flex flex-col gap-4 text-sm md:text-md sm:flex-row text-center">
                    <a
                        href="/portofolio"
                        className="group relative inline-block rounded border border-gray-800 bg-blue-500 p-2 md:px-5 md:py-4 font-medium text-black shadow-sm transition-all duration-300 hover:scale-105 dark:text-gray-300"
                    >
                        <span className="block transition duration-300 group-hover:opacity-0">Lihat Karya Saya &mdash;&raquo;</span>
                    </a>

                    <a
                        href="/contact"
                        className="group relative inline-block rounded border border-gray-800 p-2 md:px-5 md:py-4 font-medium text-black shadow-sm transition-all duration-300 hover:scale-105 dark:text-gray-300"
                    >
                        Hubungi Saya
                    </a>
                </div>

                {/* TERMINAL */}
                <div ref={terminalRef} className="hidden md:block md:w-full mt-7 pr-5">
                    <Terminal>
                        <TypingAnimation>terminal@hjrsmail&gt; npx create-next-app@latest</TypingAnimation>
                        <TypingAnimation delay={3000}>terminal@hjrsmail&gt; cd porto-hijir</TypingAnimation>
                        <TypingAnimation delay={5000}>terminal@hjrsmail&gt; npm install framer-motion</TypingAnimation>
                        <TypingAnimation delay={9000}>terminal@hjrsmail&gt; npm run dev</TypingAnimation>
                        <AnimatedSpan delay={12000}>
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

            {/* IMAGE */}
            <div
                ref={imageRef}
                className="flex mx-auto justify-center pt-20 md:items-center md:pt-1"
            >
                <Image
                    priority
                    src={MyPicture}
                    placeholder="empty"
                    alt="myphoto"
                    className="rounded-full brightness-80 duration-400 hover:brightness-100 w-50 md:w-80"
                />
            </div>
        </div>
    );
}
