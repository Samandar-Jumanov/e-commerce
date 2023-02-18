import img1 from './images/img1.webp'
import './nameAndEmail.css'
import { useContext} from 'react'
import { AccContext } from './AccountContext'
import { Eccomerce } from '../Sign/Context'
const MainAcc= () =>{
  const {setAccPage} = useContext(AccContext)
  const {setPage} = useContext(Eccomerce)

  return(
    <div className="Menu">
       <div className="imgBox" >
       <img src={img1} className='img1'/>
    
       </div>
       <div className="line"></div>
       <button onClick={()=>setAccPage('name')} className='nameGo'>Make name </button>
   <button onClick={()=>setAccPage('rate')} className='emailGo'>Change email </button> 
   <button onClick={()=>setPage('main')} className='backToStore'>Back to store </button>
    </div>
      
   
  )
}
export default MainAcc
