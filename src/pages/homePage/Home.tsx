import HomeContent from "../../components/Contents/homeContent/HomeContent";
import Header from "../../components/header/Header";

export default function Home() {

    return (
        <div className="bg-red-500 ">
            <Header/>
            <div className="flex ">
                <HomeContent/>
            </div>
        </div>
    )
}