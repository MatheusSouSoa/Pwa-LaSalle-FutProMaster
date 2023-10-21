import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import CreateTeamPage from "./pages/createTeamPage/CreatTeamPage";
import Register from "./pages/registerPage/Register";
import MacthesPage from "./pages/matchesPage/MatchesPage";
import CreateMacthesPage from "./pages/createMatches/CreateMatchesPage";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/team/create-team" element={<CreateTeamPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/matches" element={<MacthesPage/>}/>
            <Route path="/matches/create-match" element={<CreateMacthesPage/>}/>
        </Routes>
    )
}