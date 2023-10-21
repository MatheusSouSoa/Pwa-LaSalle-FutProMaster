import CreateTeam from "../../components/Contents/createTeam/CreateTeam";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

export default function CreateTeamPage() {

    return (
        <div className="bg-red-500 ">
            <Header/>
            <div className="flex flex-col md:flex-row">
                <Sidebar/>
                <CreateTeam/>
            </div>
        </div>
    )
}