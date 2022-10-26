import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import './style.css';
import './footer.css';



const OldCharity=()=>{
    const navigate = useNavigate();
    const [Accepted, setAccepted]= useState("");
    const [Declined, setDeclined]= useState("");

    
    useEffect(()=>{
        if(!Cookies.get("loggedIn")){

            navigate('/')
        }

        accepted();
        declined();

    },[])


      const handleHistory1=(e)=>{
        navigate('/category')
      }

      const handleHistory2=(e)=>{
        navigate('/viewRequest')
      }
      



    const signOut= async ()=>{
        try {


      
            Cookies.remove("loggedIn")
            navigate('/')
          
        
        } catch (error) {
      
          console.log("sign in error", error)
        }
      }



      const accepted= async ()=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/acceptedCharity")
          console.log(res.data);
          setAccepted(res.data);
        
        } catch (error) {
      
          console.log(error)
        }
    }

    const declined= async ()=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/declinedCharity")
          console.log(res.data);
          setDeclined(res.data);
        
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
        <h2>جميع الطلبات السابقه</h2>    
    </div>

    <div className="spaser"></div>


    <div className='backCont'>
<div class="dropdown">

    <div class="dropdown2">
                <span onClick={handleHistory2}>الطلبات الحاليه</span>
                </div>

      <div class="dropdown2">
                <span onClick={handleHistory1}>الفئات</span>
                </div>

      <div class="dropdown1">
                <span>الطلبات السابقه</span>
                </div>
               
                    </div>
            </div>



    <div className='content'>

    <div className='charityRA'>جمعيات تم قبولها</div>

    {Accepted==""?

 <div className="center">
    
{/* ___________________________ */}

</div>

 :Accepted=="empty"?<div className='emptyOrder'>لا توجد جمعيات مقبوله</div>: Accepted.map(doc=> 
 <button className='boxChAcc' onClick={()=>navigate(`/viewInfo${doc.id}`)}><div className='charityAccept'>{doc.Name}</div>
{/* <div className='order'></div>  */}

<div className="space"></div>


</button>)
    
 } 
  <div className='charityRD'>جمعيات تم رفضها</div>

{Declined==""?

<div className="center">
   
{/* ___________________________ */}

</div>

:Declined=="empty"?<div className='emptyOrder'>لا توجد جمعيات مرفوضه</div>: Declined.map(doc=> 
<button className='boxChDec' onClick={()=>navigate(`/viewInfo${doc.id}`)}><div className='charityDecline'>{doc.Name}</div>
{/* <div className='order'></div>  */}

<div className="space"></div>

   {/* <button className='buttonInfo' onClick={()=>navigate(`/viewInfo${doc.id}`)}>التفاصيل</button> */}

</button>)
   
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



export default OldCharity;