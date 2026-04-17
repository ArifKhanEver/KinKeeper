import React, { Suspense, useContext, useEffect, useState } from 'react';
import FriendCard from './FriendCard';
import { MoonLoader } from 'react-spinners';
import { MyContext } from '../../FriendsContext/FriendsContext';

const AllFriends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true)

    const totalOnTrack = friends.filter(friend=>friend.status =='on-track')
    const totalAlmostDue = friends.filter(friend=>friend.status =='almost due')

    useEffect(()=>{
        fetch('/friends.json').then(res=>res.json()).then(data=>{
            setFriends(data);
            setLoading(false);
        }
        )
    },[])

    const {activityData} = useContext(MyContext);

    return (
        <div className="container mx-auto min-h-screen px-8 pb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 border-b-1 border-gray-200 pb-14">
                <div className="bg-white rounded-xl p-3 md:p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                    <span className="text-[32px] font-bold text-slate-800 mb-2">{friends.length}</span>
                    <span className="text-[18px] text-slate-500">Total Friends</span>
                </div>

                <div className="bg-white rounded-xl p-3 md:p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                    <span className="text-[32px] font-bold text-slate-800 mb-2">{totalOnTrack.length}</span>
                    <span className="text-[18px] text-slate-500">On Track</span>
                </div>

                <div className="bg-white rounded-xl p-3 md:p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                    <span className="text-[32px] font-bold text-slate-800 mb-2">{totalAlmostDue.length}</span>
                    <span className="text-[18px] text-slate-500">Need Attention</span>
                </div>

                <div className="bg-white rounded-xl p-3 md:p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                    <span className="text-[32px] font-bold text-slate-800 mb-2">{activityData.length}</span>
                    <span className="text-[18px] text-slate-500">Interactions This Month</span>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Your Friends</h2>
            </div>

            <div>
                    {
                        loading? <div className='flex justify-center items-center h-[30vh]'><MoonLoader /></div> :(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center">{
                        friends.map((friend,index)=><FriendCard key={index} friend={friend}></FriendCard>)}</div>)
                        
                    }

            </div>
        </div>
    );
};

export default AllFriends;