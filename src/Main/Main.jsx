import './main.css'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineLocalGroceryStore,MdOutlineMenuOpen} from 'react-icons/md'
import {Eccomerce} from '../Sign/Context'
import { useContext,useState } from 'react'
import {FiLogOut} from 'react-icons/fi'
import { MainApi } from './MainApi'
import { Store } from '../Store/Search'
import Account from '../Account/Account'

const Main = ()=>{
    const {setPage,displayName ,displayEmail,toggle , setToggle ,  accToggle ,setAccToggle } = useContext(Eccomerce)
   
    return(
        <div className="Main">
           <li className='username'> Name: {displayName }</li>
           <br />
           <li className='email'> Change email : {displayEmail }</li>

 
           <div className="nav">

         <button className='store' onClick={()=>setToggle(true)}><MdOutlineMenuOpen/></button>
         {toggle ? <Store/> : null}

         <button className='account'onClick={()=>setPage('acc')} ><CgProfile/></button>
          <button onClick={()=>setPage('sign')} className='logout'><FiLogOut/></button>
       
           </div>
           <MainApi/>
        
   </div>
  

 
       
    )
}
export default Main