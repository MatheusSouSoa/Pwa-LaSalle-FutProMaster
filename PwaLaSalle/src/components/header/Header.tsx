import Logo from "./logo/Logo";
import MenuUser from "./menuUser/MenuUser";

export default function Header() {

    return (
        <div className="flex justify-between items-center w-full bg-green-600 p-4 px-8  h-20">
            <Logo/>
            <MenuUser/>
        </div>
    )
}