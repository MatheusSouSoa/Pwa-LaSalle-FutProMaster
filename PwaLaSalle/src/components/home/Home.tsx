import HomeContent from "../Contents/homeContent/HomeContent";
import Header from "../header/Header";
import Sidebar from "../sidebard/Sidebar";

export default function Home() {

    return (
        <div className="bg-red-500 ">
            <Header/>
            <div className="flex ">
                <Sidebar/>
                <HomeContent/>
            </div>
        </div>
    )
}