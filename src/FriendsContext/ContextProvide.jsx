import React, { Children, useEffect, useState } from 'react';
import { MyContext } from './FriendsContext';

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
    }

    const handleText= (data)=> {
        const updatedData = {...data, activity: "Text", calledTimeAt: new Date().toLocaleTimeString(), calledDateAt: new Date().toLocaleDateString('en-US',{year:'numeric', month:'long',day:'numeric'})};
        
        const newActivityData = [updatedData, ...activityData]
        setActivityData(newActivityData)
    }

    const handleVideo = (data)=> {
        const updatedData = {...data, activity: "Video", calledTimeAt: new Date().toLocaleTimeString(), calledDateAt: new Date().toLocaleDateString('en-US',{year:'numeric', month:'long',day:'numeric'})};
        
        const newActivityData = [updatedData, ...activityData]
        setActivityData(newActivityData)
    }


    return (
        <MyContext.Provider value={{handleCall, handleText,handleVideo, activityData}}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvide;