import React from "react";

interface LinkedIconProps {
    className?: string;
}

const LinkedIcon: React.FC<LinkedIconProps> = ({ className = "size-7 md:size-11" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={className}
            viewBox="0 0 24 24"
        >
            <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5
                                    5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.5
                                    19H4.5v-9h3v9zM6 8.5c-.966 0-1.75-.784-1.75-1.75S5.034
                                    5 6 5s1.75.784 1.75 1.75S6.966 8.5 6 8.5zM20
                                    19h-3v-4.5c0-1.105-.895-2-2-2s-2
                                    .895-2 2V19h-3v-9h3v1.354C13.364 10.133 14.61
                                    9 16.25 9c2.071 0 3.75 1.679 3.75 3.75V19z" />
        </svg>
    );
};

export default LinkedIcon;
