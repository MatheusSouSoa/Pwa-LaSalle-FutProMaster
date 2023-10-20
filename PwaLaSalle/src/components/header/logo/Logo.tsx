import { SneakerMove, SoccerBall } from "@phosphor-icons/react";

export default function Logo() {
    return (
        <div className="px-4 flex justify-center-items-center gap-1 py-1">
            <SneakerMove className="text-white h-16 w-16"/>
            <span className="flex text-white font-black justify-center items-center text-3xl">Pelatola</span>
        </div>
    )
}