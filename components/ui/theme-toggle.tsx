import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean | null>(null);

    useEffect(() => {
        
        if (typeof window === 'undefined') return;

        const stored = localStorage.getItem('darkMode');

        if (stored === null) {
            // Default-nya light mode, hanya aktifkan dark jika sistem minta
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.documentElement.classList.add('dark');
                setDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                setDarkMode(false);
            }
        } else {
            const isDark = stored === 'true';
            setDarkMode(isDark);
            document.documentElement.classList.toggle('dark', isDark);
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        document.documentElement.classList.toggle('dark', newDarkMode);
    };

    // Tunggu sampai mode diketahui
    if (darkMode === null) {
        return (
            <button
                className="z-50 p-1 text-gray-800 rounded opacity-50 cursor-not-allowed border-1 border-gray-800"
                disabled
                aria-label="Loading theme toggle"
            >
                ...
            </button>
        );
    }

    return (
        <button
            onClick={toggleDarkMode}
            className="z-50 p-1 px-3 text-gray-800 dark:text-gray-100 rounded-md border-1 border-gray-950 dark:border-gray-100/30 hover:bg-darkk dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
        >
            {darkMode ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;
