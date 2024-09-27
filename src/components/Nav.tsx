import { FaAirbnb } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between w-full p-3 px20">
            <Link
                to="/"
                className="flex items-center gap-2 text-2xl text-[#ff5a5f] font-bold"
            >
                <FaAirbnb className="text-4xl" />
                <span>airbnb</span>
            </Link>
            <ul className="flex items-center justify-center gap-4">
                <li className="font-bold text-[#484848]">
                    <a href="#">Logemants</a>
                </li>
                <li className="text-[#484848]">
                    <a href="#">Expériences</a>
                </li>
                <li className="text-[#484848]">
                    <a href="#">Expérience en lignes</a>
                </li>
            </ul>
            <div className="flex items-center justify-center gap-3">
                <a href="#">
                    <TbWorld />
                </a>
                <div className="flex items-center justify-center gap-3 border border-[#ededed] p-3 rounded-full hover:shadow-md cursor-pointer">
                    <IoIosMenu className="text-xl" />
                    <FaRegCircleUser className="text-2xl" />
                </div>
            </div>
        </nav>
    );
}
