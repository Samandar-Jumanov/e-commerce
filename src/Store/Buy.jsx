import './search.css'
import React,{useContext, useState}from 'react'
import { Eccomerce } from '../Sign/Context'
import {IoStar} from 'react-icons/io5'
import emailjs from 'emailjs-com'
export const Buy  = () =>{
   const { setBuyToggle, setPage }= useContext(Eccomerce)
   const [val , setVal] = useState('submit') 
const SubmitClick = () =>{
    setVal('Submitted ')
    setPage('main')
    setBuyToggle(false)
}

    return(
       
        <form className="Buy">
             <div className="inner">
                <button className='cancelPopUp' onClick={()=>
                  {
                    setBuyToggle(false) 
                     setPage('main')
                  }
                }>X</button>
            <input type="text" placeholder='enter username'  name='email'className='buyEmail'/>
            <br />
            <br />
            <input type="text" placeholder='email' className='buyPhone' name='username'required />
            <br />
            <br />
             <h4>Rate us </h4>
             <br />
             <br />
               <div className="stars">
               <span className='star start1'><IoStar/></span>
              <span className='star start2'><IoStar/></span>
              <span className='star start3'><IoStar/></span>
              <span className='star start3'><IoStar/></span>
              <span className='star start3'><IoStar/></span>
               </div>
         <br />
              <br />
              <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className='btnSubmit' type='submit' onClick={SubmitClick}>{val}</button>

             </div>
        </form>
    )
}


