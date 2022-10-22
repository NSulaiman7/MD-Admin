import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import './style.css';
import './footer.css';





const ForgotPass=()=>{
    const navigate = useNavigate();

    const [email, setEmail]= useState("");
    const [Error, setError]= useState(false);



    const handleSubmit=(e)=>{
      
      if(email.length==0){
        setError(true);
      }
      console.log(email);
    }

    const handleHistory=(e)=>{
      navigate('/')
    }

  

    useEffect(()=>{
        if(Cookies.get("loggedIn")){

            navigate('/')

        }

    },[])


    return(
            
      <div>

        <body>
   <div className="topnav"></div>

    <div className="spaser"></div>

    <div className="search_bar">


        <h2>استعادة كلمة المرور</h2> 

    </div>

    <div className="spaser"></div>
 
    <div className='backCont'>  <div className='back'  onClick={handleHistory}></div>  </div>

    <div className="content">
        <div className="center">
            
            <div className="col-100" onSubmit={handleSubmit}>
            
               <div className="col-100">
               {email.length<=0? <label className='error'>* </label>:""}
                 <label for="email" className="content-font">البريد الإلكتروني </label> 
          <input id="email" type="email" className="form-item-right" placeholder="البريد الإلكتروني" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                                {/* {Error? <label className='error'>هذا الحقل مطلوب</label>:""} */}
                     </div>


                   <div className="col-100">
                         <button id="submit" type='submit' className="form-item btn">ارسال</button> 
                         {/* {Error? <div className='error'>!ادخل البريد الإلكتروني</div>:null} */}


                       
                     </div> 

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



export default ForgotPass;