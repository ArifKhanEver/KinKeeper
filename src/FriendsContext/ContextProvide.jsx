import React, { Children, useEffect, useState } from 'react';
import { MyContext } from './FriendsContext';
import { Flip, toast } from 'react-toastify';

const ContextProvide = ({children}) => {
    const [AllFriendsData, setAllFriendsData] = useState([])
    useEffect(()=>{
        fetch('/friends.json').then(res=>res.json()).then(data=>setAllFriendsData(data))
    },[])

    const [activityData, setActivityData] = useState([]);


    const handleCall = (data)=> {
        const updatedData = {...data, activity: "Call", calledTimeAt: new Date().toLocaleTimeString(), calledDateAt: new Date().toLocaleDateString('en-US',{year:'numeric', month:'long',day:'numeric'})};

        const newActivityData = [updatedData, ...activityData]
        setActivityData(newActivityData)
        toast.success(`You called to ${data.name}`,{theme:"colored",transition:Flip})

    }

    const handleText= (data)=> {
        const updatedData = {...data, activity: "Text", calledTimeAt: new Date().toLocaleTimeString(), calledDateAt: new Date().toLocaleDateString('en-US',{year:'numeric', month:'long',day:'numeric'})};
        
        const newActivityData = [updatedData, ...activityData]
        setActivityData(newActivityData);
        toast.success(`You texted to ${data.name}`,{theme:"colored",transition:Flip})
    }

    const handleVideo = (data)=> {
        const updatedData = {...data, activity: "Video", calledTimeAt: new Date().toLocaleTimeString(), calledDateAt: new Date().toLocaleDateString('en-US',{year:'numeric', month:'long',day:'numeric'})};
        
        const newActivityData = [updatedData, ...activityData]
        setActivityData(newActivityData)
        toast.success(`You video called to ${data.name}`,{theme:"colored",transition:Flip})

    }


    return (
        <MyContext.Provider value={{handleCall, handleText,handleVideo, activityData}}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvide;