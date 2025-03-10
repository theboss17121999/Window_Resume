import { useEffect, useState } from "react";
import { github } from "../../details";
import { FaGithub } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CiGrid41, CiInstagram, CiMail } from "react-icons/ci";
import { HiCommandLine } from "react-icons/hi2";
import { RiSlashCommands2 } from "react-icons/ri";
import { GoCommandPalette } from "react-icons/go";
import { PiLinkedinLogoLight } from "react-icons/pi";

export const TaskBar = () => {
    return (
        <div className="w-full absolute bottom-0 left-0 bg-rose-100 text-white grid grid-cols-3">
            <Github />
            <Appsbar />
            <div className="flex justify-end pr-4 border-black">
                <TimeAndDate />
            </div>
        </div>
    );
};

function Github() {
    return (
        <div className="pl-4 pt-[0.3rem] py-3 pt-3">
            <a href={github} target="_blank" rel="noopener noreferrer">
                <div className="flex gap-4">
                    <FaGithub className="text-black text-giticontb" />
                </div>
            </a>
        </div>
    );
}

function Appsbar() {
    return (
        <div className="flex items-center gap-2">
            {/* Apps Icon */}
            <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-violet-600"> 
                <CiGrid41 className="text-black text-giticontb text-giticontb" />
            </button>

            {/* Input Field - Takes up available space */}
            <div className="flex-grow">
                <input type="text" className="w-full border rounded px-1 py-[0.2rem] text-black" />
            </div>

            {/* Icons */}
            <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-violet-600"> 
                <div>
                    <CiMail className="text-black text-giticontb text-giticontb" />
                </div>
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-violet-600"> 
                <div>
                    <GoCommandPalette className="text-black text-giticontb text-giticontb" />
                </div>
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-violet-600"> 
                <div>
                    <CiInstagram className="text-black text-giticontb text-giticontb" />
                </div>
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-violet-600"> 
                <div>
                    <PiLinkedinLogoLight className="text-black text-giticontb text-giticontb" />
                </div>
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
        <div className="text-black text-datetimesz text-right border-black grid grid-cols-2 py-2">
            <div className="pr-2 flex flex-col items-center text-center">
                <span>ENG</span>
                <span>IN</span>
            </div>
            <div>
                <div>{currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
                <div>
                    {currentTime.getDate().toString().padStart(2, "0")}- 
                    {(currentTime.getMonth() + 1).toString().padStart(2, "0")}- 
                    {currentTime.getFullYear()}
                </div>
            </div>
        </div>
    );
}
