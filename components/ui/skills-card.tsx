import React from 'react';

interface SkillCardProps {
    icon: React.ReactNode;
    label: string;
}

export default function SkillCard({ icon, label }: SkillCardProps) {
    return (
        <div className="bg-transparent border border-gray-600 rounded-md md:h-[100px] py-2 md:py-0 p-0 md:p-2 md:gap-8 flex flex-col md:flex-row items-center justify-center transition-all duration-300 ease-in-out hover:scale-110">
            <div className="size-7 md:size-11">{icon}</div>
            <div className="flex flex-col justify-start pt-1 md:pt-0">
                <p className="text-xs md:text-lg">{label}</p>
            </div>
        </div>
    );
}
