

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function Home()
{

  const navigate = useNavigate()

  
  return(
    <> 
     
    <h1>This Is My Home Page</h1>
    
    <button onClick={()=> navigate("/Courses"  , {state:{name:"kuldeep",city:"New Delhi"}} )}   > Go To Courses </button>
    <div>
    <a href="https://edunovatechnology.in/" target='_blank' >Go to our website</a>
    </div>
    </>
   
  )
}

export default Home