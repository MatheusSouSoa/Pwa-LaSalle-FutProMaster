
export default function Logo() {
    return (
        <div className=" px-1 md:px-4 flex justify-between-items-center gap-1 py-1">
            <img src="/logo.png" className="hidden sm:block sm:w-72"/>
            <img src="/logo_1.png" className="block w-20 sm:hidden"/>
            {/* <SneakerMove className="text-white h-10 w-10 md:h-16 md:w-16"/> */}
            {/* <span className="text-white font-black justify-center items-center text-sm md:text-3xl hidden sm:flex">FutProMaster</span> */}
        </div>
    )
}