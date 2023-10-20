import { SneakerMove } from "@phosphor-icons/react";

export default function Logo() {
    return (
        <div className="px-4 flex justify-center-items-center gap-1 py-1">
            <SneakerMove className="text-white h-10 w-10 md:h-16 md:w-16"/>
            <span className="flex text-white font-black justify-center items-center text-lg md:text-3xl">FutProMaster</span>
        </div>
    )
}