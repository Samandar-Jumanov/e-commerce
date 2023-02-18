import { useContext, useState } from "react";
import { auth, provider } from "./Auth";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { Eccomerce } from "./Context";
import './signup.css'
import { signInWithPopup } from "firebase/auth";
import {FaGoogle} from 'react-icons/fa'


const SignUp = () =>{
    const {setPage} = useContext(Eccomerce)
    const [email , setEmail] = useState('')
    const [password , setPassword ] = useState('')

    const getUser=async () =>{
      const user = await createUserWithEmailAndPassword(auth, email, password )
      setPage('main')
    }
    const signin = () =>{
     
        signInWithPopup(auth, provider).then((result)=>{
          setPage('main')
 
        })
    }
 
   
    
    return(
        <div className="SignUp">

        <div className="container">
            <h2 id="header">WELCOME OUR STORE </h2>
            <div>
            <input type="text"placeholder='enter email'id='nameField'onChange={(e)=>setEmail(e.target.value)}max={7}/>
            </div>
             <div>
            <input type="password"placeholder='enter password 'id="passwordField"onChange={(e)=>setPassword(e.target.value)}/>
           
             </div>
            <button id="btn"onClick={getUser}>Submit</button>
            <p className="or">  OR  </p>
            <button id="btn2"onClick={signin} >Sign up With <span className="google"><FaGoogle/></span></button>
        </div>
       
     </div>
      
    )
}

export default SignUp