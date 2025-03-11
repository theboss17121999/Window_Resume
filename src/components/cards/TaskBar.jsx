import React, { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa6";
import { CiGrid41, CiMail } from "react-icons/ci";
import { GoCommandPalette } from "react-icons/go";
import socialLogo from "../../assets/logo/social-media.png";
import projectLogo from "../../assets/logo/project.png";
import { github } from '../../details';

export const TaskBar = () => {
    return (
        <div className="w-full absolute bottom-0 left-0 bg-gradient-to-r from-yellow-400 to-red-500 text-black grid grid-cols-3 py-1 shadow-md">
            <Github />
            <Appsbar />
            <div className="flex justify-end pr-4">
                <TimeAndDate />
            </div>
        </div>
    );
};

function Github() {
    return (
        <div className="pl-4 pt-2">
            <a href={github} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-2 hover:text-gray-600">
                    <FaGithub className="text-black text-3xl" />
                    <span className="text-sm">GitHub</span>
                </div>
            </a>
        </div>
    );
}

function Appsbar() {
    return (
        <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
                <CiGrid41 className="text-black text-lg" />
            </button>

            <div className="flex-grow">
                <SearchInput />
            </div>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
                <CiMail className="text-black text-lg" />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
                <GoCommandPalette className="text-black text-lg" />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
                <img src={socialLogo} alt="Social-logo" className="w-5 h-5 object-contain" />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
                <img src={projectLogo} alt="Project-logo" className="w-6 h-6 object-contain" />
            </button>
        </div>
    );
}

function TimeAndDate() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-black text-right text-[0.8rem] grid grid-cols-2 py-1">
            <div className="pr-2 flex flex-col items-center text-center">
                <span>ENG</span>
                <span>IN</span>
            </div>
            <div>
                <div>{currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
                <div>
                    {currentTime.getDate().toString().padStart(2, "0")} -
                    {(currentTime.getMonth() + 1).toString().padStart(2, "0")} -
                    {currentTime.getFullYear()}
                </div>
            </div>
        </div>
    );
}

function SearchInput() {
    return (
        <div className="flex items-center border border-gray-400 rounded-full p-1 w-full bg-gray-200 hover:bg-gray-300 transition">
            <input 
                placeholder="Search..." 
                id="input" 
                className="flex-grow outline-none px-2 text-black placeholder-gray-600 text-sm bg-transparent" 
                name="text" 
                type="text"
            />
            <button className="p-1 rounded-full bg-gray-400 hover:bg-gray-500 transition">
                <svg 
                    fill="#000000" 
                    width="16px" 
                    height="16px" 
                    viewBox="0 0 1920 1920" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                        fillRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
}

export default TaskBar;
