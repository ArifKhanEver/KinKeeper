import React, { useContext } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MyContext } from '../FriendsContext/FriendsContext';
import { FiPhoneCall } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoMdVideocam } from "react-icons/io";

const TimeLine = () => {

  const {activityData} = useContext(MyContext);

  console.log(activityData)
    return (
        <div className='bg-[#F8FAFC]'>
           <div className="max-w-4xl mx-auto p-8 min-h-screen font-sans">
                <div className="mb-8 py-6 rounded-lg">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Timeline</h1>
                    
                    <div className="relative w-64">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer">
                        <option>Filter timeline</option>
                        <option>Meetup</option>
                        <option>Call</option>
                        <option>Text</option>
                        <option>Video</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                        <IoIosArrowDown />
                    </div>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                    {
                        activityData.map((data, index) => <div key={index} className="group flex items-center gap-6 p-5 border-1 border-gray-200 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-500 transition-all duration-300">
                            <div className="w-12 h-12 flex items-center justify-center text-2xl bg-gray-50 rounded-lg border border-gray-100 group-hover:scale-110 transition-transform">
                            {data.activity == "Call"? <FiPhoneCall />:data.activity == "Text"?<LuMessageSquareMore />:<IoMdVideocam />}
                            </div>

                            <div className="flex-1">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="font-bold text-gray-700 text-lg">{data.activity}</span>
                                    <span className="text-gray-400 font-medium">with</span>
                                    <span className="text-gray-500 font-semibold">{data.name}</span>
                                </div>
                                <div className="text-sm text-gray-400 font-medium mt-0.5">
                                    {data.calledDateAt} {data.calledTimeAt}
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TimeLine;