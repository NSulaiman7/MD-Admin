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
    const [Del, setDel]= useState("");
    const [add, setAdd]= useState("");
    const [fal, setFal]= useState(false);

    
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


      const category= async (id)=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/category",{id:id})
          console.log(res.data);
          
          setCategory(res.data);
        
        } catch (error) {
      
          console.log(error)
        }

    }

    const Delete= async (id)=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/delete",{id:id})
          console.log(res.data);
          setDel(res.data);

          if(res.data.succesful){

            for(let i=0; i<Categ.length; i++){

                if(id==Categ[i].id){
                    
                   Categ.splice(i,1)
                    
                }
            }
          }

        } catch (error) {
      
          console.log(error)
        }

    }


    const Add= async ()=>{
        try {
      
          const res= await axios.post("http://localhost:5000/api/auth/addCategory",{category:add})

       

          if(res.data.Name){
            console.log("yes")
                    
                   Categ.push(res.data)
                   setFal(!fal)
                
          }

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
        <h2>????????????</h2>    
    </div>

    <div className="spaser"></div>
    <div className='backCont'>
    {/* <div class="dropdown">
                <span>??????????????<i class="fa fa-chevron-down"></i></span>
                <div class="dropdown-content">
                    <p className='dropText' onClick={handleHistory1}>?????????? ???????????????? </p>                    
                </div>
            </div> */}
                <div class="dropdown">

<div class="dropdown2">

            <span onClick={handleHistory1}>?????????????? ??????????????</span>
            </div>

  <div class="dropdown1">

            <span >????????????</span>
            </div>
            <div class="dropdown2">

            <span onClick={handleHistory2}>?????????????? ??????????????</span>
            </div>
           
            </div>
            {/* <div className='back'  onClick={handleHistory}> </div>  */}
            </div>

    {/* <div className='backCont'>  <div className='back'  onClick={handleHistory}></div>  </div> */}

    <div className="content">


             
          {/* <input className=".form-itemC" placeholder="??????????" /> */}

          
                            
<div className='addBox'>
    <div> <label for="password" className="addTop">?????? ?????? ??????????</label></div>
    <button className='addCategoryBtn' onClick={()=>Add()}>??????????</button>
    <input className="form-itemC" placeholder="??????????" onChange={(e)=>setAdd(e.target.value)}/>
    </div>


    {Categ==""?

<div className="center">
    
{/* ___________________________ */}


</div>


:Categ.map(doc=> <div className="center-request">

<div className='charity'>{doc.Name}</div>

{/* <div className="space"></div> */}

    {/* {Del==""? <div><button className='smallRedBtn' onClick={Delete}>?????? ??????????</button></div>: <div className='order'>???? ?????? ??????????</div> } */}
    {/* {Del==""? <div><button className='smallRedBtn' onClick={Delete(id)}>??????</button></div>:<div className='order'>???? ??????????</div> */}
    {/* <button className='smallRedBtn' onClick={Delete}>??????</button> */}
    <button className='false' onClick={()=> Delete(doc.id)}></button>

</div>

)
    
}
<div>
      {/* <button className='addCategoryBtn'>?????????? ?????? ??????????</button> */}
      </div>

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



export default Category;