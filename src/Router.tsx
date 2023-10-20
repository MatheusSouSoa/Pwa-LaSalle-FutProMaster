import { Routes, Route } from "react-router-dom";
import Home from "./components/homePage/Home";
import CreateTeamPage from "./components/createTeamPage/CreatTeamPage";
import Register from "./components/registerPage/Register";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create-team" element={<CreateTeamPage/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}