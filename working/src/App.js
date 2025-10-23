import logo from './logo.svg';
import './App.css';
import { Route, Routes , Link} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Home from './pages/home';
import Courses from './pages/courses';
import Settings from './pages/setting';
import Profile from './pages/profile';

function Dashboard()
{
  return (<div>
  <h1>Dashboard</h1>
  <nav>
    <Link to="profile">Profile</Link>
    <Link to="settings">Settings</Link>
  </nav>
{/* outlet is the placeholder for the internal routing  */}

   <Outlet />  
</div>)
}

function App() {
  return (
   <div>

   <nav>
    {/*  / slash is the base URL  */}
      <Link to="/" > Home </Link>
      <Link to="/Courses"> Courses</Link>
      <Link to="/Dashboard"> Dashboard</Link>

    </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Courses' element={<Courses/>}></Route>
      <Route path="/dashboard" element={<Dashboard />}>
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>

   </div>
  );
}

export default App;
