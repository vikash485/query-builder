import React from "react";
import { BsCalendar2Fill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";

interface props {}

export const TopBar: React.FC<props> = () => {
    return (
        <div className="justify-between space-x-4 f">
            <div className="items-center flex-grow px-1 text-sm border rounded f text-dark-600 border-dark-700 bg-dark-800">
                <IoSearchSharp size={24} className="mx-2" />
                <input
                    className="w-full py-2 text-white bg-transparent outline-none"
                    placeholder="Search for product feedback"
                />
            </div>
            <button className="text-sm border rounded w-44 c border-dark-700 bg-dark-800">
                <HiDownload className="mr-2" />
                Export feedback
            </button>
            <button className="text-sm font-medium bg-indigo-500 rounded w-36 c">
                View Feedback
            </button>
            <button className="flex-grow text-sm border rounded c border-dark-700 bg-dark-800">
                <BsCalendar2Fill className="mr-2 text-dark-600" />
                July 28, 2020 - Oct 28, 2020
            </button>
        </div>
    );
};
