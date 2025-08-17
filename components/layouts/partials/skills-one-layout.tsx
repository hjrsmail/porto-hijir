import React from 'react';
import SkillCard from "@/components/ui/skills-card";
import HTMLIcon from "@/components/icons/html-icon";
import CSSIcon from "@/components/icons/css-icon";
import JSIcon from "@/components/icons/js-icon";
import PHPIcon from "@/components/icons/php-icon";
import BootstrapIcon from "@/components/icons/bootstrap-icon";
import TailwindIcon from "@/components/icons/tailwind-icon";
import LaravelIcon from "@/components/icons/laravel-icon";
import NodeJSIcon from "@/components/icons/nodejs-icon";
import AlpineJSIcon from "@/components/icons/alpine-icon";
import NextJSIcon from '@/components/icons/nextjs-icon';
import ReactIcon from '@/components/icons/react-icon';
import TSIcon from '@/components/icons/ts-icon';

interface Skill {
    label: string;
    icon: React.ReactNode;
}

const skills: Skill[] = [
    { label: 'HTML', icon: <HTMLIcon /> },
    { label: 'CSS', icon: <CSSIcon /> },
    { label: 'JavaScript', icon: <JSIcon /> },
    { label: 'PHP', icon: <PHPIcon /> },
    { label: 'Laravel', icon: <LaravelIcon /> },
    { label: 'NextJS', icon: <NextJSIcon /> },
    { label: 'ReactJS', icon: <ReactIcon /> },
    { label: 'TypeScript', icon: <TSIcon /> },
    { label: 'Tailwind CSS', icon: <TailwindIcon /> },
    { label: 'Bootstrap', icon: <BootstrapIcon /> },
    // { label: 'NodeJS', icon: <NodeJSIcon /> },
    // { label: 'AlpineJS', icon: <AlpineJSIcon /> },
];

const SkillsGridOne: React.FC = () => {
    return (
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:pt-2">
            {skills.map(({ label, icon }) => (
                <SkillCard key={label} label={label} icon={icon} />
            ))}
        </div>
    );
};

export default SkillsGridOne;
