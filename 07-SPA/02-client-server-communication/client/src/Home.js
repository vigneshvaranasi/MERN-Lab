import React, {useEffect, useState} from 'react';
function Home(){
    const [userdata,setUserData]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("http://localhost:5000/users")
            const data = await res.json()
            console.log(data)
            setUserData(data.payload)
        }
        fetchData()
    },[])

    return (
        <div>
            <h1 className='heading'>Users Data Fom API</h1>
            <div className='cards'>
                {
                    userdata.map((user,index)=>{
                        return(
                            <div key={index} className='card'>
                                <h1>Name: {user.name}</h1>
                                <p>Age: {user.age}</p>
                                <p>Email: {user.mail}</p>
                                <p>Phone: {user.phone}</p>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    );
}
export default Home;