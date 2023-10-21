import MatchesContent from "../../components/Contents/MatchesContent/MatchesContent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

export default function MacthesPage() {
    return (
        <div className=" bg-zinc-200 ">
            <Header/>
            <div className="flex flex-col md:flex-row">
                <Sidebar/>
                <MatchesContent/>
            </div>
        </div>
    )
}