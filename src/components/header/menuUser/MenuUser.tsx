import { User } from "@phosphor-icons/react";

export default function MenuUser() {
    return (
        <div className="justify-center items-center gap-3 hidden sm:flex">
            <div className="font-bold text-white text-md md:text-2xl">
                Nome usuario
            </div>
            <div className="px-3 py-4 bg-red-400 rounded-full flex justify-center items-center overflow-hidden">
                <User className="w-6 h-5 "/>
            </div>
        </div>
    )
}