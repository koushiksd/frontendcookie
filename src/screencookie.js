import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
const Screen2 = ()=>{
    let [token ,settoken ] = useState()
    const cookies = new Cookies();

    useEffect(()=>{
        
            settoken(cookies.get('token'))
           
        
    },[])
    return <div>
        screen2
    <br />
        <p> Recived Token : {token}</p>
    </div>
}

export default Screen2;