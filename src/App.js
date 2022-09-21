
import './App.css';
import React,{useState, useEffect} from 'react';
import { Route, BrowserRouter,Routes } from "react-router-dom";
import SignIn from './screens/signIn';
import SignOut from './screens/signOut';



function App() {
  // const [email, setEmail]= useState("");
  // const [password, setPassword]= useState("");
  const [loggedIn, setLoggedIn]= useState();

 

// const signIn= async ()=>{
//   try {

//     const res= await axios.post("http://localhost:5000/api/auth/signIn",{email:email, password:password})
//     if(res.data.loggedIn=="true"){
//       Cookies.set("loggedIn", true)
//       setLoggedIn(Cookies.get("loggedIn"))
//     }
  
//   } catch (error) {

//     console.log("sign in error", error)
//   }
// }

// const signOut= async ()=>{
//   try {

//       Cookies.remove("loggedIn")
//       setLoggedIn(Cookies.get("loggedIn"))
    
  
//   } catch (error) {

//     console.log("sign in error", error)
//   }
// }

  return (
    <div className="App">

<BrowserRouter>
        <Routes>        
            <Route  path="/" element={<SignIn/>}/>
            <Route   path="/SignOut" element={<SignOut/>}/>
        </Routes >
</BrowserRouter>

      {/* { !loggedIn?<>
      <label>email</label>
      <input type="email" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>

      <label>password</label>
      <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>

      <input type="submit" value="sign in" onClick={signIn}/>

      </>: <input type="submit" value="sign out" onClick={signOut}/>} */}
    </div>
  );

  
}

export default App;
