import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import './style.css';
import './footer.css';





const SignIn=()=>{
    const navigate = useNavigate();

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    // const [loggedIn, setLoggedIn]= useState("");

    useEffect(()=>{
        if(Cookies.get("loggedIn")){

            navigate('/SignOut')

        }

    },[])

    const signIn= async ()=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/signIn",{email:email, password:password})

          if(res.data.loggedIn=="true"){
            Cookies.set("loggedIn", true)
            navigate('/SignOut')
          }
          else{

            window.alert("خطأ في البريد الإلكتروني/كلمة المرور!");
          }
        
        } catch (error) {
      
          console.log("sign in error", error)
        }
      }

    return(
            
      <div>

        <body>
   <div className="topnav"></div>

    <div className="spaser"></div>

    <div className="search_bar">
        <h2>تسجيل الدخول</h2>    
    </div>

    <div className="spaser"></div>

    <div className="content">
        <div className="center">
            
            <div className="col-100">
            
               <div className="col-100">
                 <label for="email" className="content-font">البريد الإلكتروني</label>
          <input id="email" type="email" className="form-item-right" placeholder="البريد الإلكتروني" value={email} onChange={(e)=> {setEmail(e.target.value)}} required/>
                     </div>

                   
                     <div className="col-100">
                         <label for="password" className="content-font">كلمة المرور</label>
      <input id="password" type="password" className="form-item-right" placeholder="كلمة المرور" value={password} onChange={(e)=> {setPassword(e.target.value)}} required/>
                    </div>


                   <div className="col-100">
                         <button id="submit" type='submit' className="form-item btn" onClick={signIn} >دخول</button> 
                       
                     </div> 

                     {/* <span class="psw"> <a class="psw" href="ForgotPass.html">هل نسيت كلمة المرور؟</a></span>  */}
                
             </div>        
        </div>
   </div>

   <div className="footer-dark">  

       <footer>
           <div className="container">
                
             <p className="copyright">MD © 2022</p>
          </div>
        </footer>

    </div>

    </body>
    
    </div>

    );
} 



export default SignIn;