import React, { useEffect, useState } from 'react';
import { OrbitingCircles } from "@/src/components/magicui/orbiting-circles";
import { File, Settings, Search } from "lucide-react";
import HTMLIcon from "@/components/icons/html-icon";
import CSSIcon from "@/components/icons/css-icon";
import JSIcon from "@/components/icons/js-icon";
import ReactIcon from "@/components/icons/react-icon";
import TailwindIcon from "@/components/icons/tailwind-icon";
import NodeJSIcon from "@/components/icons/nodejs-icon";
import NextJSIcon from "@/components/icons/nextjs-icon";
import TSIcon from '../icons/ts-icon';
import BootstrapIcon from '../icons/bootstrap-icon';
import LaravelIcon from '../icons/laravel-icon';
import MySQLIcon from '../icons/mysql-icon';
import { Post } from 'ogl';
import PostgreeIcon from '../icons/postgree-icon';
import PostmanIcon from '../icons/postman-icon';
import GITIcon from '../icons/git-icon';
import GithubIcon from '../icons/github-icon';
import NPMIcon from '../icons/npm-icon';
import { IconCloud } from '@/src/components/magicui/icon-cloud';

const OrbitCircle = () => {
    const [isMobile, setIsMobile] = useState(false);

    const icons = [
        <HTMLIcon />,
        <CSSIcon />,
        <JSIcon />,
        <ReactIcon />,
        <NodeJSIcon />,
        <NextJSIcon />,
        <TSIcon />,
        <TailwindIcon />,
        <BootstrapIcon />,
        <LaravelIcon />,
        <MySQLIcon />,
        <PostgreeIcon />,
        <PostmanIcon />,
        <GITIcon />,
        <GithubIcon />,
        <NPMIcon />,
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // cek pertama kali
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const outerRadius = isMobile ? 140 : 280;
    const innerRadius = isMobile ? 90 : 150;

    const iconSize = isMobile ? 30 : 50;

    return (

        <>
            <div className="relative overflow-hidden h-[400px] md:h-[700px] mx-auto flex items-center justify-center">
                
                {/* Outer Orbit */}
                <OrbitingCircles radius={outerRadius} iconSize={iconSize}>
                    <ReactIcon />
                    <TailwindIcon />
                    <NodeJSIcon />
                    <NextJSIcon />
                    <BootstrapIcon />
                    <LaravelIcon />
                    <HTMLIcon />
                    <CSSIcon />
                    <JSIcon />
                    <TSIcon />
                </OrbitingCircles>

                {/* Inner Orbit */}
                <OrbitingCircles radius={innerRadius} iconSize={iconSize} reverse>
                    <MySQLIcon />
                    <PostgreeIcon />
                    <PostmanIcon />
                    <GITIcon />
                    <GithubIcon />
                    <NPMIcon />
                </OrbitingCircles>

            </div>

            {/* <div className="relative overflow-hidden 
            h-[400px] w-[300px] 
            mx-auto block md:hidden items-center justify-center">
                <IconCloud icons={icons} />
            </div> */}
        </>
    );
};

export default OrbitCircle;
