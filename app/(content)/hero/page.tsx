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
import ProfileCard from "@/src/blocks/Components/ProfileCard/ProfileCard";
import Aurora from '@/src/blocks/Backgrounds/Aurora/Aurora';
import HeroButtons from "@/components/ui/hero-buttons";
import { useActiveSection } from "@/hooks/use-active-session";
import Orb from '@/src/blocks/Backgrounds/Orb/Orb';

export default function Hero() {
    const nameRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const activeId = useActiveSection(["project", "contact"]);

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

        // Profile IMG Card
        if (profileRef.current) {
            tl.fromTo(
                profileRef.current,
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


            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] z-0">
                <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                />
            </div> */}
            <SmoothCursor />
            <SplashCursor />

            {/* TEXT */}
            <div
                ref={textRef}
                className="flex max-w-4xl flex-col items-center pt-20 md:ml-6 md:items-start md:pt-0 lg:col-span-2"
            >
                <h1 className="hidden md:block text-3xl text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-300">
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
                        className="rotate-x-10 w-100 z-10 -rotate-y-15 rotate-z-10 rounded-lg duration-500 hover:-translate-x-10 hover:translate-y-10 hover:translate-z-10 hover:rotate-x-0 hover:rotate-y-0 hover:rotate-z-0"
                    />


                </div>

                <div className="mt-3 items-center gap-3 text-base sm:text-2xl dark:text-gray-200 hidden md:flex ">
                    <CodeBracketIcon className="size-5 text-blue-500 md:size-8" />
                    <GradientText
                        colors={["oklch(70.7% 0.165 254.624)", "oklch(62.7% 0.265 303.9)"]}
                        animationSpeed={3}
                        showBorder={false}
                    >
                        Fullstack Developer
                    </GradientText>
                </div>

                <p className="-mt-4 md:mt-4 text-justify text-sm md:text-lg dark:text-gray-400">
                    I am a web developer with an interest in both frontend and backend development, and experience in building applications using Laravel, Tailwind CSS, and Bootstrap. I am currently expanding my expertise in React with TypeScript and Next.js.
                </p>

                <HeroButtons />

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
            <div ref={profileRef} className="mt-20 md:mt-0">
                <ProfileCard
                    avatarUrl="/images/pict.webp"
                />
            </div>

        </div>
    );
}
