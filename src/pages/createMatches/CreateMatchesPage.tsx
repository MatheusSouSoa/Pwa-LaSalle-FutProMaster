import CreateMatchesContent from "../../components/Contents/createMatchesContent/CreateMatchesContent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

export default function CreateMacthesPage() {
    return (
        <div className=" bg-zinc-200 ">
            <Header/>
            <div className="flex flex-col md:flex-row">
                <Sidebar/>
                <CreateMatchesContent/>
            </div>
        </div>
    )
}