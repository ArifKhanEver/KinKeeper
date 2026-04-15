import React from 'react';

const FriendCard = () => {
    return (
        <div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" alt="David Kim" className="w-20 h-20 rounded-full object-cover mb-4"/>
                <h3 className="text-lg font-bold text-slate-800 mb-1">David Kim</h3>
                <span className="text-xs text-gray-400 mb-3">62d ago</span>
                <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">WORK</span>
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Almost Due</span>
            </div>
        </div>
    );
};

export default FriendCard;