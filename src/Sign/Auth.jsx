import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { initializeApp} from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyCzQHfJ6ualHCt05azqh1W2oUPTuaxSKwg",
  authDomain: "auth-aa90b.firebaseapp.com",
  projectId: "auth-aa90b",
  storageBucket: "auth-aa90b.appspot.com",
  messagingSenderId: "727888143380",
  appId: "1:727888143380:web:acd3950a1d32d0003eb301",
  measurementId: "G-J9JVF5FFK2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

 
