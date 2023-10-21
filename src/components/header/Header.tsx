import { useLocation } from "react-router";
import Logo from "./logo/Logo";
import MenuUser from "./menuUser/MenuUser";

export default function Header() {
    const location = useLocation();
    const shouldRenderUserInfo = location.pathname !== "/" && location.pathname !== "/register";
  

    return (
        <div className="flex justify-between items-center w-full bg-green-600 p-4 px-2 md:px-8  h-20">
            <Logo/>
            {shouldRenderUserInfo && <MenuUser />}
        </div>
    )
}