"use client";


export default function HeroButtons() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="mt-6 flex flex-col gap-4 text-sm md:text-md sm:flex-row text-center">
            <button
                onClick={() => scrollToSection("project")}
                className="group relative inline-block rounded border border-gray-800 bg-blue-500 p-2 md:px-5 md:py-4 font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:text-white"
            >
                <span className="block transition duration-300 group-hover:opacity-100">
                    Lihat Karya Saya &mdash;&raquo;
                </span>
            </button>


            <button
                onClick={() => scrollToSection("contact")}
                className={`group relative inline-block rounded border border-gray-800 p-2 md:px-5 md:py-4 font-medium shadow-sm transition-all duration-300 hover:scale-105"
                    }`}
            >
                Hubungi Saya
            </button>
        </div>
    );
}
