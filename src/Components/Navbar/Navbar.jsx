import { BsCoin } from "react-icons/bs";
import logopng from "..//..//assets/images/logo.png"
const Navbar = ({coins}) => {
    return (
        <header className="w-[90%] mx-auto mt-12 border-b-2">
            <div className="flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">
                {/* Logo */}
                <div><img src={logopng} alt="" /></div>

                {/* menu end */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Menu Start */}
                    <ul className="flex gap-6 text-gray-600 text-base">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Fixture</a></li>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Schedules</a></li>
                    </ul>
                    <button className="border-2 border-gray-300 p-1.5 px-6 rounded-lg inline-flex items-center gap-x-2 font-semibold">{coins} Coin <BsCoin className="text-xl text-yellow-800" /></button>
                </div>
            </div>
        </header >

    );
};

export default Navbar;