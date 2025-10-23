


import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';





function Courses()
{
  const navigate = useNavigate()
  const location = useLocation()
  const  {name,city} = location.state
  
  return (
    <>
    <h1>This Is My Courses</h1>
    <h1> Hi {name} , Welcome to {city}</h1>
    <button onClick={()=> navigate("/")}   > Go Back To Home </button>
    </>
  )
}

export default Courses