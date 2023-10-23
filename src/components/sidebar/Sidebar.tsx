import { SoccerBall, TShirt } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import {NavLink, useLocation} from 'react-router-dom'

export default function Sidebar() {

    const [currentPath, setCurrentPath] = useState('');
    const location = useLocation();
  
    useEffect(() => {
      setCurrentPath(location.pathname);
    }, [location]);

    return (
        <div className="bg-white min-w-[20%] md:h-screen screenCalc flex">
            <div className="w-full">
                <div className="flex md:flex-col gap-3 md:py-3 px-3 w-full">
                    <NavLink 
                        to="/matches" 
                        className={` md:text-white md:bg-green-300 md:border-none  hover:bg-green-400 cursor-pointer flex w-full items-center md:p-3 md:rounded-2xl justify-between
                        ${currentPath.includes('/matches') ? "border-b-2 border-green-600 text-green-500 md:bg-green-600" : "text-zinc-400"}
                        `}>
                        <span className="font-black text-md lg:text-xl ">Partidas</span>
                        <SoccerBall className="w-10 h-10"/>
                    </NavLink>
                    <NavLink 
                        to="/team/create-team" 
                        className={` md:text-white md:bg-green-300 md:border-none  hover:bg-green-400 cursor-pointer flex w-full items-center md:p-3 md:rounded-2xl justify-between
                        ${currentPath.includes('/team') ? "border-b-2 border-green-600 text-green-500 md:bg-green-600" : "text-zinc-400"}
                        `}>
                        <span className="font-black text-md lg:text-xl ">Times</span>
                        <TShirt className="w-10 h-10 "/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}