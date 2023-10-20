import RegisterContent from "../Contents/registerContent/RegisterContent";
import Header from "../header/Header";

export default function Register() {

    return (
        <div className="bg-red-500 ">
            <Header/>
            <div className="flex ">
                <RegisterContent/>
            </div>
        </div>
    )
}