import React from 'react';
import SkillCard from "@/components/ui/skills-card";
import MySQLIcon from '@/components/icons/mysql-icon';
import GITIcon from '@/components/icons/git-icon';
import GithubIcon from '@/components/icons/github-icon';
import NPMIcon from '@/components/icons/npm-icon';
import PostgreeIcon from '@/components/icons/postgree-icon';
import PostmanIcon from '@/components/icons/postman-icon';

interface Skill {
    label: string;
    icon: React.ReactNode;
}

const skills: Skill[] = [
    { label: 'MySQL', icon: <MySQLIcon /> },
    { label: 'PostgreSQL', icon: <PostgreeIcon /> },
    { label: 'Postman' , icon: <PostmanIcon /> },
    { label: 'GIT', icon: <GITIcon /> },
    { label: 'Github', icon: <GithubIcon /> },
    { label: 'NPM', icon: <NPMIcon /> },

];

const SkillsGridTwo: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:pt-2">
            {skills.map(({ label, icon }) => (
                <SkillCard key={label} label={label} icon={icon} />
            ))}
        </div>
    );
};

export default SkillsGridTwo;
