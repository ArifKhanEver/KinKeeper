import React from 'react';

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Friends to keep close in your life
            </h1>
            
            <p className="text-slate-500 max-w-2xl mb-10 text-sm md:text-base leading-relaxed">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the 
                relationships that matter most.
            </p>

            <button className="flex items-center gap-2 bg-[#1D3E31] text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-900 transition-all active:scale-95">
                <span className="text-xl">+</span>
                Add a Friend
            </button>
        </div>
    );
};

export default Banner;