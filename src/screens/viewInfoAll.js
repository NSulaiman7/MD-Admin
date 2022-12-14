import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from "react-router-dom";
import './style.css';
import './footer.css';





const ViewInfoAll=()=>{
    const navigate = useNavigate();
    const {id}=useParams();
    const [InfoAll, setInfoAll]= useState("");
    const [accept, setAccept]= useState("");
    const [decline, setDecline]= useState("");
    // const [back, setBack]= useState("");

    
    useEffect(()=>{
        if(!Cookies.get("loggedIn")){

            navigate('/')

        }
        viewInfoAll(id);
        console.log(id);

    },[])

    const handleHistory=(e)=>{
        navigate('/oldCharity')
      }  

    const signOut= async ()=>{
        try {
      
            Cookies.remove("loggedIn")
            navigate('/')
          
        
        } catch (error) {
      
          console.log("sign in error", error)
        }
      }


      const viewInfoAll= async (id)=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/viewInfoAll",{id:id})
          console.log(res.data);

          if(res.data.status=="accepted"){
            setAccept(true);
          }

          if(res.data.status=="declined"){
            setDecline(true);
          }
         
          setInfoAll(res.data);
        
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
            <input type="submit" className='out' value="?????????? ????????" onClick={signOut}/>
                </div>
    

    </div>

    <div className="spaser"></div>

    <div className="search_bar">
        <h2>?????????????? ?????????????? </h2>    
    </div>

    <div className="spaser"></div>


    <div className="contentI">

{InfoAll==""?

<div className="centerInfo">
    
    
{/* ___________________________ */}

</div>

:<div>
    <div className='back'  onClick={handleHistory}></div>

    <div className='boxInfo'>

    <div className='orgaName'>{InfoAll.organizationName}</div>

    <div className='orgaTop'>?????? ?????????? ??????????????</div>
    <div className='orgaInfo'>{InfoAll.organizationDiscreption}</div>

    <div className='orgaTop'>??????????????</div>
    <div className='orgaInfo'>{InfoAll.region}</div>

    <div className='orgaTop'>???????? ??????????????</div>
    <div className='orgaInfo'>{InfoAll.activity}</div>

    <div className='orgaTop'>?????? ????????????</div>
    <div className='orgaInfo'>{InfoAll.phoneNumber}</div>

    <div className='orgaTop'>?????? ??????????????</div>
    <div className='orgaInfo'>{InfoAll.documentationNo}</div>
    


{/* {accept==""&&decline==""? <div>
    <button className='redBtn' onClick={Decline}>??????</button>

    <button className='greenBtn' onClick={Accept}>????????</button></div>: accept==""? <div className='order'>???? ?????? ??????????</div>
    : <div className='order'>???? ???????? ??????????</div>} */}

</div>
</div>
}

</div>

    <div className="footer-dark">        
        <footer>
            <div className="container">
                
                <p className="copyright">MD ?? 2022</p>
            </div>
        </footer>
    </div>
     
</body> 


            </div>
    );
}



export default ViewInfoAll;