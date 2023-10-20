import { User } from "@phosphor-icons/react";

export default function MenuUser() {
    return (
        <div className="flex justify-center items-center gap-3">
            <div>
                Nome usuario
            </div>
            <div className="px-3 py-4 bg-red-400 rounded-full flex jsutify-center items-center overflow-hidden">
                <User className="w-6 h-5 "/>
            </div>
        </div>
    )
}