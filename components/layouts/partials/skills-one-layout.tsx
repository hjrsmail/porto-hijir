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

interface Skill {
    label: string;
    icon: React.ReactNode;
}

const skills: Skill[] = [
    { label: 'HTML', icon: <HTMLIcon /> },
    { label: 'CSS', icon: <CSSIcon /> },
    { label: 'JavaScript', icon: <JSIcon /> },
    { label: 'PHP', icon: <PHPIcon /> },
    { label: 'Bootstrap', icon: <BootstrapIcon /> },
    { label: 'Tailwind CSS', icon: <TailwindIcon /> },
    { label: 'Laravel', icon: <LaravelIcon /> },
    { label: 'NodeJS', icon: <NodeJSIcon /> },
    { label: 'AlpineJS', icon: <AlpineJSIcon /> },
];

const SkillsGridOne: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:pt-2">
            {skills.map(({ label, icon }) => (
                <SkillCard key={label} label={label} icon={icon} />
            ))}
        </div>
    );
};

export default SkillsGridOne;
