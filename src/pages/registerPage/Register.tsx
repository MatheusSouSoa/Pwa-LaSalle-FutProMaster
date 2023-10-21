import RegisterContent from "../../components/Contents/registerContent/RegisterContent";
import Header from "../../components/header/Header";

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