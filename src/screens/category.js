import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from "react-router-dom";
import './style.css';
import './footer.css';





const Category=()=>{
    const navigate = useNavigate();
    const {id}=useParams();
    const [Categ, setCategory]= useState("");
     

    
    useEffect(()=>{
        if(!Cookies.get("loggedIn")){

            navigate('/')
        }

        category(id);
        console.log(id);

    },[])

    // const handleHistory=(e)=>{
    //     navigate('/home')
    //   }  

      const handleHistory1=(e)=>{
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


      const category= async (id)=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/category",{id:id})
          console.log(res.data);
          setCategory(res.data);
        
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
        <h2>الفئات</h2>    
    </div>

    <div className="spaser"></div>
    <div className='backCont'>
    <div class="dropdown">
                <span>القائمة<i class="fa fa-chevron-down"></i></span>
                <div class="dropdown-content">
                    <p className='dropText' onClick={handleHistory1}>طلبات الجمعيات </p>                    
                </div>
            </div>
            {/* <div className='back'  onClick={handleHistory}> </div>  */}
            </div>

    {/* <div className='backCont'>  <div className='back'  onClick={handleHistory}></div>  </div> */}

    <div className="content">

 
    {Categ==""?

<div className="center">
    
{/* ___________________________ */}

</div>

:Categ.map(doc=> <div className="center-request">


<div className='charity'>{doc.Name}</div>

<div className="space"></div>

    <button className='smallRedBtn'>حذف الفئة</button>

</div>
)
    
}

      <button className='addCategoryBtn'>إضافة فئة جديدة</button>

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



export default Category;