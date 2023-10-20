import CreateTeam from "../Contents/createTeam/CreateTeam";
import Header from "../header/Header";
import Sidebar from "../sidebard/Sidebar";

export default function CreateTeamPage() {

    return (
        <div className="bg-red-500 ">
            <Header/>
            <div className="flex ">
                <Sidebar/>
                <CreateTeam/>
            </div>
        </div>
    )
}