import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from "react-router-dom";
import './style.css';
import './footer.css';





const ViewInfo=()=>{
    const navigate = useNavigate();
    const {id}=useParams();
    const [Info, setInfo]= useState("");
    const [accept, setAccept]= useState("");
    const [decline, setDecline]= useState("");
    // const [back, setBack]= useState("");

    
    useEffect(()=>{
        if(!Cookies.get("loggedIn")){

            navigate('/')

        }
        viewInfo(id);
        console.log(id);

    },[])

    const handleHistory=(e)=>{


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

      const viewInfo= async (id)=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/viewInfo",{id:id})
          console.log(res.data);

          if(res.data.status=="accepted"){
            setAccept(true);
          }

          if(res.data.status=="declined"){
            setDecline(true);
          }
         
          setInfo(res.data);
        
        } catch (error) {
      
          console.log(error)
        }

    }

    
    const Accept= async ()=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/updateAccept",{id:id})
          console.log(res.data);
          setAccept(res.data);

        } catch (error) {
      
          console.log(error)
        }

    }

    
    const Decline= async ()=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/updateDecline",{id:id})
          console.log(res.data);
          setDecline(res.data);

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
        <h2>معلومات الجمعية </h2>    
    </div>

    <div className="spaser"></div>

    {/* <div className='backCont'>  <div className='back'  onClick={handleHistory}></div></div> */}

    <div className="contentI">

{/* <h1 className='topic'>معلومات الجمعية الخيرية</h1> */}


{Info==""?

<div className="centerInfo">
    
    
{/* ___________________________ */}

</div>

:<div>
    <div className='back'  onClick={handleHistory}></div>

    <div className='boxInfo'>
    

    <img className='imageOrg' src={Info.profilePicture}/>

    <div className='orgaName'>{Info.organizationName}</div>

    <div className='orgaTop'>شرح مختصر للجمعية</div>
    <div className='orgaInfo'>{Info.organizationDiscreption}</div>

    <div className='orgaTop'>المنطقة</div>
    <div className='orgaInfo'>{Info.region}</div>

    <div className='orgaTop'>نشاط الجمعية</div>
    <div className='orgaInfo'>{Info.activity}</div>

    <div className='orgaTop'>رقم الجوال</div>
    <div className='orgaInfo'>{Info.phoneNumber}</div>

    <div className='orgaTop'>رقم الترخيص</div>
    <div className='orgaInfo'>{Info.documentationNo}</div>
    


{accept==""&&decline==""? <div>
    <button className='redBtn' onClick={Decline}>رفض</button>

    <button className='greenBtn' onClick={Accept}>قبول</button></div>: accept==""? <div className='order'>تم رفض الطلب</div>
    : <div className='order'>تم قبول الطلب</div>}

</div>
</div>
}
{/* {accept==""&&decline==""? <div>
    <button className='redBtn' onClick={Decline}>رفض</button>

    <button className='greenBtn' onClick={Accept}>قبول</button></div>: accept==""? <div className='order'>تم رفض الطلب</div>
    : <div className='order'>تم قبول الطلب</div>} */}

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



export default ViewInfo;