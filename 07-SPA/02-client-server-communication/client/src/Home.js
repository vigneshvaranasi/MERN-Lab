import React, {useEffect, useState} from 'react';
function Home(){
    // const [userdata,setUserData]=useState([
    //     {
    //         name:"Vignesh",
    //         age:20,
    //         mail:"vignesh@gmail.com",
    //         phone:1234567890
    //     },
    //     {
    //         name:"Eswar",
    //         age:25,
    //         mail:"eswar@gmail.com",
    //         phone:9876543210
    //     },
    //     {
    //         name:"Fakruddin",
    //         age:17,
    //         mail:"fakruddin@gmail.com",
    //         phone:3334445551
    //     },
    //     {
    //         name:"pavan",
    //         age:20,
    //         mail:"pavan@gmail.com",
    //         phone:1234567890
    //     }
    // ])
    const [userdata,setUserData]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("https://fluffy-space-telegram-j67wrrp94qvcqpqp-5000.app.github.dev/users")
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