import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import './style.css';
import './footer.css';





const SignOut=()=>{
    const navigate = useNavigate();
    const [Request, setRequest]= useState("");
     

    
    useEffect(()=>{
        if(!Cookies.get("loggedIn")){

            navigate('/')
        }

        viewRequests();

    },[])


    const signOut= async ()=>{
        try {
      
            Cookies.remove("loggedIn")
            navigate('/')
          
        
        } catch (error) {
      
          console.log("sign in error", error)
        }
      }


      const viewRequests= async ()=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/viewRequest")
          console.log(res.data);
          setRequest(res.data);
        
        } catch (error) {
      
          console.log(error)
        }
    }

    return(

        <div>

             <body>
    
    <div className="topnav">
    

            <div className="col">
            <input type="submit" className='out' value="تسجيل خروج" onClick={signOut}/>
                </div>
    

    </div>

    <div className="spaser"></div>

    <div className="search_bar">
        <h2>الصفحة الرئيسية</h2>    
    </div>

    <div className="spaser"></div>



    <div className="content">

    <h1 className='request'>طلبات الجمعيات الخيرية</h1>

    {Request==""?

<div className="center">
    
{/* ___________________________ */}

</div>

:Request.map(doc=> <div className="center-request">

<div className='charity'>{doc.Name}</div>

<div className="space"></div>

    <button className='buttonInfo' onClick={()=>navigate(`/viewInfo${doc.id}`)}>معلومات  الجمعية</button>

</div>)

    
}

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



export default SignOut;
