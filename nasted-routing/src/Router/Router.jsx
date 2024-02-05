import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Profile from './../Pages/Profile/Profile';
import Setting from '../Pages/Setting/Setting';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} >
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;