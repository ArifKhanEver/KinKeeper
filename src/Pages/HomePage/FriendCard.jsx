import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    return (
        <Link to={`friend/${friend.id}`}>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <img src={friend.picture} alt={friend.name} className="w-20 h-20 rounded-full object-cover mb-4"/>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{friend.name}</h3>
                <span className="text-xs text-gray-400 mb-3">{friend.days_since_contact}d ago</span>
                <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase mb-2">
                    {
                        friend.tags.map((tag,index)=><span key={index} className="px-3 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-full uppercase mr-2">{tag}</span>)
                                
                    }
                </span>
                <span className={`${ friend.status =='Overdue'? 'bg-[#EF4444]':friend.status =='On-Track'?'bg-[#244D3F]':'bg-[#EFAD44]'} text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider`}>{friend.status}</span>
            </div>
        </Link>
    );
};

export default FriendCard;