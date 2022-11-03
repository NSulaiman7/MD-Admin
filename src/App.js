
import './App.css';
// import React,{useState, useEffect} from 'react';
import { Route, BrowserRouter,Routes } from "react-router-dom";
import SignIn from './screens/signIn';
import SignOut from './screens/viewReq';
import ViewInfo from './screens/viewInfo';
import ForgotPass from './screens/forgotPass';
import Home from './screens/home';
import Category from './screens/category';
import OldCharity from './screens/oldCharity';
import ViewInfoAll from './screens/viewInfoAll';
// import {BrowserRouter as Router} from 'react-router-dom';



function App() {
  // const [email, setEmail]= useState("");
  // const [password, setPassword]= useState("");
  // const [loggedIn, setLoggedIn]= useState();


 

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
            <Route   path="/viewRequest" element={<SignOut/>}/>
            <Route   path="/viewInfo:id" element={<ViewInfo/>}/>
            <Route   path="/ForgotPass" element={<ForgotPass/>}/>
            <Route   path="/home" element={<Home/>}/>
            <Route   path="/category" element={<Category/>}/>
            <Route   path="/oldCharity" element={<OldCharity/>}/>
            <Route   path="/viewInfoAll:id" element={<ViewInfoAll/>}/>
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
