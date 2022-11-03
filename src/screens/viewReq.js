import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import './style.css';
import './footer.css';


// import ReactDOM from "react-dom";
// import ConfirmBox from "react-dialog-confirm";
// import "../node_modules/react-dialog-confirm/build/index.css";





const SignOut=()=>{
    const navigate = useNavigate();
    const [Request, setRequest]= useState("");
    // const [isOpen, setIsOpen]= useState(false);
     


    // const handleClose = () => {
    //     setIsOpen(!isOpen);
    //   };
    
    //   const handleConfirm = () => {
    //     alert("yes button clicked");
    //   };
    //   const handleCancel = () => {
    //     alert("no button clicked");
    //   };


    
    useEffect(()=>{
        if(!Cookies.get("loggedIn")){

            navigate('/')
        }

        viewRequests();

    },[])

    // const handleHistory=(e)=>{
    //     navigate('/home')
    //   }  

      const handleHistory1=(e)=>{
        navigate('/category')
      }

      const handleHistory2=(e)=>{
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
{/* <ConfirmBox // all props are required
        icon="https://img.icons8.com/clouds/100/000000/vector.png"
        label={{
          text: "Are you sure you want to delete this element?",
          confirm: "yes",
          cancel: "no"
        }}
        isOpen={isOpen} // to close or open dialog (true | false)
        onClose={handleClose} // to close or open dialog
        onConfirm={handleConfirm} // return yes : if button yes clicked
        onCancel={handleCancel} // return no : button no clicked
      /> */}
             <body>
    
    <div className="topnav">
    

            <div className="col">
            <input type="submit" className='out' value="تسجيل خروج" onClick={signOut}/>
                </div>
    

    </div>

    <div className="spaser"></div>

    <div className="search_bar">
        <h2>طلبات الجمعيات الخيرية</h2>    
    </div>

    <div className="spaser"></div>

    <div className='backCont'>

    <div class="dropdown">

    <div class="dropdown1">

                <span>الطلبات الحاليه</span>
                </div>

      <div class="dropdown2">

                <span onClick={handleHistory1}>الفئات</span>
                </div>
                <div class="dropdown2">

                <span onClick={handleHistory2}>الطلبات السابقه</span>
                </div>

                </div>
                {/* <div class="dropdown-content">
                    <p className='dropText' onClick={handleHistory1}>الفئات</p>                    
                </div> */}

            

            {/* <div className='back'  onClick={handleHistory}> </div>  */}

            </div>

    {/* <div className='backCont'>  <div className='back'  onClick={handleHistory}> </div>  </div> */}

    <div className="content">
      

      <div className='ReqBox1'>
    <div className='charityR'>طلبات في الانتظار</div>
</div>

{/* <div className='ReqBoxCenter'> */}
    {Request==""?

<div className="center">
    
{/* ___________________________ */}

</div>

:Request=="empty"?<div className='emptyOrder'>لا توجد طلبات</div>: Request.map(doc=> <button className='center-request1' onClick={()=>navigate(`/viewInfo${doc.id}`)}>
<div className='charity'>{doc.Name}</div>
{/* <div className='charity'>{doc.Name}</div> */}

{/* <div className="space"></div> */}

    {/* <button className='buttonInfo' onClick={()=>navigate(`/viewInfo${doc.id}`)}>التفاصيل</button> */}

</button>)

    
}

{/* </div> */}


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
