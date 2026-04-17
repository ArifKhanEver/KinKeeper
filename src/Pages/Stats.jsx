import React, { useContext } from 'react';
import { Pie, PieChart,Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { MyContext } from '../FriendsContext/FriendsContext';


const Stats = () => {

    const {activityData} = useContext(MyContext);


    const calls = activityData.filter(data=> data.activity =="Call");
    const texts = activityData.filter(data=> data.activity =="Text");
    const videos = activityData.filter(data=> data.activity =="Video");

    const data = [
    {name:"Call", value:calls.length, fill:'#7f37f5'},
    {name:"Text", value:texts.length, fill:'#244d3f'},
    {name:"Video", value:videos.length, fill:'#37a163'}
]

    return (
        <div className='bg-gray-50'>

            <div className='flex flex-col items-center justify-center max-w-[90%] md:max-w-[70%] mx-auto py-8 md:py-14 min-h-screen'>
                <h1 className='text-4xl md:text-5xl font-bold mb-10 text-slate-800 tracking-tight'>
                    Friendship Analytics
                </h1>
                

                <div className='bg-white flex flex-col justify-center w-full p-8 rounded-xl space-y-6'>
                    <h2 className='text-[18px] font-medium'>
                        By Interaction Type
                    </h2>

                    <div className='w-full h-[250px]'>
                        {
                            calls.length === 0 && texts.length === 0 && videos.length === 0? <h2 className='text-2xl font-bold grid place-content-center h-[30vh]'>Add Some activity first</h2>:
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                data={data}
                                innerRadius="70%"
                                outerRadius="90%"
                                cornerRadius={40}
                                paddingAngle={8}
                                dataKey="value"
                                stroke="none"
                                >
                                {
                                data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))
                                }
                                </Pie>
                                <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        }
                    </div>
                    
                    <div className="flex gap-6 mt-8 mx-auto">
                        {data.map((item,index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                            <span className="text-sm font-medium text-slate-600">{item.name}: {item.value}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Stats;