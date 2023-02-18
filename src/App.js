import './App.css';
import SignUp from "./Sign/signup";
import {Eccomerce} from './Sign/Context'
import {useState } from 'react'
import { Store } from './Store/Search';
import Main from './Main/Main'
import Account from './Account/Account';
import{Buy} from './Store/Buy'
function App() {
  const [page , setPage] = useState('sign')
  const [displayName , setDisplayName] = useState('undefined')
  const [displayEmail , setDisplayEmail] = useState('')
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [toggle , setToggle ] = useState(false )
const [buyToggle , setBuyToggle ] = useState(false)
const [accToggle , setAccToggle ] = useState(false)



const contextVal = {page , setPage, 
  displayName,setDisplayName,
   displayEmail , setDisplayEmail,
   name , setName,
   email , setEmail,
   toggle , setToggle,
   buyToggle , setBuyToggle,
   accToggle , setAccToggle 
  
   }

  //  const Main =lazy(()=>import('./Main/Main'))
  return (
    <div className="App">
      <Eccomerce.Provider value={contextVal}>
    {page ==='sign' && <SignUp/>}
    {page ==='main' && <Main/>}
    {page ==='acc' && <Account/>}
    {page ==='store' && <Store/>}
    {page ==='buy' && <Buy/>}


      </Eccomerce.Provider>
    </div>
  );
}

export default App;
