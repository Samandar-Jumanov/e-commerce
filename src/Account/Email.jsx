import React,{useContext, useState} from "react"
import { Eccomerce } from "../Sign/Context"
import './nameAndEmail.css'

const Email = () =>{
    const {setPage ,setDisplayEmail,email , setEmail} = useContext(Eccomerce)
    const [btn, setBtn] = useState('Set email')
    
    const getName = () =>{
        setDisplayEmail(email)
         setBtn('Submitted')
    }
    return(
        <div className="All">
   <input type="text"onChange={(e)=>setEmail(e.target.value)} className='nameInput' />
   <button onClick={getName}  className='nameBtn'placeholder="enter username">{btn}</button>
   <button onClick={()=>setPage('main')} className='backBtn'>Go back store </button>
</div>
       
    )
}
export default Email
