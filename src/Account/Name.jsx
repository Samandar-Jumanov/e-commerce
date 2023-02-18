import React,{useContext, useState} from "react"
import { Eccomerce } from "../Sign/Context"
import './nameAndEmail.css'

const Name = () =>{
    const {setPage ,setDisplayName,name , setName} = useContext(Eccomerce)
    const [btn, setBtn] = useState('Set name')
    const getName = () =>{
        setDisplayName(name)
         setBtn('Submitted')
    }
    return(
        <div className="All">
   <input type="text"onChange={(e)=>setName(e.target.value)} className='nameInput' />
   <button onClick={getName}  className='nameBtn'placeholder="enter username">{btn}</button>
   <button onClick={()=>setPage('main')} className='backBtn'>Go back store </button>
</div>
       
    )
}
export default Name
