import {useState} from "react";

function Components(){
    
    const time = new Date().toLocaleTimeString();

    const[Data,setData] = useState(time);

    const UpdateTime = (()=>{
        const time = new Date().toLocaleTimeString();



        setData(time)
    })

    setInterval(UpdateTime,1000);
    return(
        <>
           <p className="Data">{Data}</p>
        </>
    )
}

export default Components