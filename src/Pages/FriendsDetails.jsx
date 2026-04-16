import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { RiDeleteBinLine } from "react-icons/ri";
import { PiBellSimpleZ } from "react-icons/pi";
import { FiArchive } from "react-icons/fi";
import { PiPhoneCallBold } from "react-icons/pi";import text from '../assets/text.png';
import { LuMessageSquareMore } from "react-icons/lu";
import { PiVideoCamera } from "react-icons/pi";

const FriendsDetails = () => {
    const {Id} = useParams();
    const friends = useLoaderData();

    const clickedFriend = friends.find(friend => friend.id == Id);
    const {name,picture, email, days_since_contact,status,tags,bio,goal,next_due_date} = clickedFriend;

    return (
        <div className='bg-gray-50'>
            
            <div className="max-w-4xl mx-auto py-[80px]  font-sans min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    <div className="md:col-span-4 flex flex-col gap-4">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full mb-4 bg-gray-200 overflow-hidden">
                                <img src={picture} alt={name} className="w-full h-full object-cover"/>
                            </div>

                            <h2 className="text-xl font-bold text-slate-800 capitalize tracking-tight">{name}</h2>

                            <div className="flex gap-2 my-3">
                                <span className={`${ status =='Overdue'? 'bg-[#EF4444]':status =='On-Track'?'bg-[#244D3F]':'bg-[#EFAD44]'} text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider`}>{status}</span>
                            </div>

                            <div className="flex gap-2 my-3">
                                {
                                    tags.map(tag=><span className="px-3 py-1 bg-green-100 text-green-700 text-[12px] font-bold rounded-full capitalize tracking-wide">{tag}</span>)
                                }
                                
                            </div>
                            <p className="text-slate-500 italic text-sm">{bio}</p>
                            <p className="mt-2 text-slate-400 text-[11px]">Preferred: {email}</p>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-3">
                            <button className="w-full py-3 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-slate-700 hover:bg-gray-50 transition-all font-medium text-sm">
                                <span className='text-xl'><PiBellSimpleZ /></span> Snooze 2 Weeks
                            </button>

                            <button className="w-full py-3 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-slate-700 hover:bg-gray-50 transition-all font-medium text-sm">
                                <span className="text-lg"><FiArchive /></span> Archive
                            </button>

                            <button className="w-full py-3 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 transition-all font-medium text-sm">
                                <span className="text-lg"><RiDeleteBinLine /></span> Delete
                            </button>
                        </div>
                    </div>


                    <div className="md:col-span-8 space-y-6">
                    
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col justify-center">
                                <div className="text-3xl font-bold text-slate-800">{days_since_contact}</div>
                                <div className="text-[12px] text-slate-400 mt-1 capitalize font-semibold tracking-widest">Days Since Contact</div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col justify-center">
                                <div className="text-3xl font-bold text-emerald-900">{goal}</div>
                                <div className="text-[12px] text-slate-400 mt-1 capitalize font-semibold tracking-widest">Goal (Days)</div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col justify-center">
                                <div className="text-xl font-bold text-emerald-900 leading-tight">{next_due_date}</div>
                                <div className="text-[12px] text-slate-400 mt-1 capitalize font-semibold tracking-widest">Next Due</div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-emerald-950 font-bold text-base tracking-tight">Relationship Goal</h3>
                                <button className="btn p-4">Edit</button>
                            </div>
                            <p className="text-slate-600 text-sm">
                                Connect every <b>30 days</b>
                            </p>
                        </div>



                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-emerald-950 font-bold text-xl mb-6 text-[12px]">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-4">
        
                                <button className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center hover:border-emerald-500 hover:shadow-md transition-all active:scale-95 group">
                                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                                        <PiPhoneCallBold />
                                    </span>
                                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Call</span>
                                </button>

                                <button className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center hover:border-emerald-500 hover:shadow-md transition-all active:scale-95 group">
                                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                                        <LuMessageSquareMore />
                                    </span>
                                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Text</span>
                                </button>

                                <button className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center hover:border-emerald-500 hover:shadow-md transition-all active:scale-95 group">
                                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                                        <PiVideoCamera />
                                    </span>
                                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Video</span>
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default FriendsDetails;