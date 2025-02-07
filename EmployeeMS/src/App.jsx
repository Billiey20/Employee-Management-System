import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Employee from './Components/Employee.jsx';
import Category from './Components/Category.jsx';
import Profile from './Components/Profile.jsx';
import AddCategory from './Components/AddCategory.jsx';
import AddEmployee from './Components/AddEmployee.jsx';
import EditEmployee from './Components/EditEmployee.jsx';
import Start from './Components/Start.jsx';
import EmployeeLogin from './Components/EmployeeLogin.jsx';
import EmployeeDetail from './Components/Employeedetail.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route */}
        <Route path='/start' element={<Start />}></Route>
        <Route path='/adminlogin' element={<Login />} />
        <Route path='/employee_login' element={<EmployeeLogin/>} />
        <Route path='/employee_detail/:id' element={<EmployeeDetail />} />

        {/* Dashboard Layout with Nested Routes */}
        <Route path='/dashboard' element={<Dashboard />}>
          {/* Default child route: when navigating to /dashboard, Home is rendered */}
          <Route index element={<Home />} />
          <Route path='employee' element={<Employee />} />
          <Route path='category' element={<Category />} />
          <Route path='profile' element={<Profile />} />
          <Route path='add_category' element={<AddCategory />} />
          <Route path='add_employee' element={<AddEmployee />} />
          
          <Route path='edit_employee/:id' element={<EditEmployee />} />
        </Route>

        {/* If you want a separate home route accessible via '/', you can add it */}
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
