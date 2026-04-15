import React from 'react';
import FriendCard from './FriendCard';

const AllFriends = () => {
    return (
        <div className="container mx-auto min-h-screen px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 border-b-1 border-gray-200 pb-14">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                    <span className="text-[32px] font-semibold text-slate-800 mb-2">10</span>
                    <span className="text-[18px] text-slate-500 tracking-wider">Total Friends</span>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                    <span className="text-[32px] font-semibold text-slate-800 mb-2">3</span>
                    <span className="text-[18px] text-slate-500 tracking-wider">On Track</span>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                    <span className="text-[32px] font-semibold text-slate-800 mb-2">6</span>
                    <span className="text-[18px] text-slate-500 tracking-wider">Need Attention</span>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                    <span className="text-[32px] font-semibold text-slate-800 mb-2">12</span>
                    <span className="text-[18px] text-slate-500 tracking-wider">Interactions This Month</span>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Your Friends</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FriendCard></FriendCard>

            </div>
        </div>
    );
};

export default AllFriends;