import { useEffect, useState } from "react";

export const TaskBar = () => {
    return (
        <div className="w-full absolute bottom-0 left-0 bg-rose-100 text-white p-2 grid grid-cols-3">
            <Github />
            <Appsbar />
            <div className="flex justify-end pr-4 border-black">
                <TimeAndDate />
            </div>
        </div>
    );
};

function Github() {
    return <div className="text-black">git</div>;
}

function Appsbar() {
    return <div className="text-black">apps</div>;
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
        <div className="text-black text-west text-right border-black">
            <div>{currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
            <div>
                {currentTime.getDate().toString().padStart(2, "0")}-
                {(currentTime.getMonth() + 1).toString().padStart(2, "0")}-
                {currentTime.getFullYear()}
            </div>
        </div>
    );
}
