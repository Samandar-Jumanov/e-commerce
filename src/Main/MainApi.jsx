 import React, { useState, useContext} from "react";
 import './main.css'
 import { Store } from "../Store/Search";
import { Eccomerce } from "../Sign/Context";
import fakeData from '../Store/products.json'
 export const MainApi =() =>{
  const { setPage }= useContext(Eccomerce)

    return(
        <>
    {fetch  &&
        fakeData.map((item, key )=>
        <div className="grid-container">
       <div className="grid-wrapper">
        <div className="box"  key={key}>
        <img src={item.image}  style={{width:'100%', height:'300px',objectFit:'cover' }} />
        <h3>{item.title}</h3>
        <h3 >{item.price}$</h3>
        <p className="des" >{item.description}</p>

     
  <br /> 
  <div>
       
     
       <button onClick={()=>{setPage('buy')}} style={{width:'30%' , height:'30px',
     background:'green', border:'none',
      outline:'none',appearance:'none'
      ,borderRadius:'5px',
      cursor:'pointer'}}>Buy </button>
      <br />
      <br />
    
      </div>
    
   
        </div>
       </div>
       </div>
        )
        
    }
        </>
    )
 }