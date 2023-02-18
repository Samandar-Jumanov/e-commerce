import { AccContext } from "./AccountContext";
import React, { useState } from "react";
import Name from './Name'
import Rate from "./Email";
import MainAcc from "./MainAcc";
const Account = () =>{
    const [accPage , setAccPage] = useState('mainacc')
    return(
        <div className="Account">
           <AccContext.Provider value ={{accPage , setAccPage}}>
            {accPage ==='name' && <Name/>}
            {accPage ==='rate' && <Rate/>}
            {accPage ==='mainacc' && <MainAcc/>}
            
           </AccContext.Provider>
        </div>
    )
}
export default Account