import {FaAngleLeft} from 'react-icons/fa'
import {useState, useContext } from "react"
import {Eccomerce} from '../Sign/Context'
import data from './products.json'
import { Buy } from './Buy'
import './search.css'
export const Store = () =>{
  const [filterSearch , setFilterSearch] = useState('')
   const {toggle , setBuyToggle,buyToggle, setToggle }= useContext(Eccomerce)
  
    return(
        <div className="Store">
        <button onClick={()=>setToggle(false)} className='cancel'><FaAngleLeft/></button>
        <input type="search"  className="searchBar" onChange={(e)=>setFilterSearch(e.target.value)}/>
      
       {data
         .filter((item)=>{
          if (filterSearch==''){
             return   <button className="itemTitle">Noting found</button>
          }
          else if (item.title.toLowerCase().includes(filterSearch.toLowerCase())){
            return item 
          }
         })
       .map((item)=>
       <div className="showTItle" key={item.id}>
        {buyToggle ?
         <>
       <h3 className="itemTitle" onClick={()=>setBuyToggle(true)} >{item.title}</h3>
       <button onClick={()=>setBuyToggle(true)} style={{width:'50%', height:'30px', 
       cursor:'pointer', background:'blue', border:'none', outline:'none',
        appearance:'none',}}>Buy</button>
       <Buy/>
       <br />
       <br />
       </>
       :  
        <>
          <h3 className="itemTitle" >{item.title}</h3>
          <h4>{item.price}$</h4>

       <button onClick={()=>setBuyToggle(true)} style={{width:'50%', height:'30px', cursor:'pointer', 
       background:'green', border:'none', outline:'none', appearance:'none'}}>Buy</button>
        
         </>

         }
         </div>
       )}
        </div>
    )
}