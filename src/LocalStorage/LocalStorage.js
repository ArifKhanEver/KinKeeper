const getDataFromLocalDB = ()=>{
    const data = localStorage.getItem('friends');
    if(data){
        return JSON.parse(data)
    }
    return []
}

const setDataToLocalDB =(friend)=> {
    const data = getDataFromLocalDB();


        data.unshift(friend)
        localStorage.setItem('friends', JSON.stringify(data))
}

export {getDataFromLocalDB,setDataToLocalDB};