import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Employee from './Components/Employee.jsx';
import Category from './Components/Category.jsx';
import Profile from './Components/Profile.jsx';
import AddCategory from './Components/AddCategory.jsx';
import AddEmployee from './Components/AddEmployee.jsx';
import EditEmployee from './Components/EditEmployee.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/profile' element={< Profile />}></Route>
        <Route path='/dashboard/add_category' element={< AddCategory />}></Route>
        <Route path='/dashboard/add_employee' element={< AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:id' element={< EditEmployee />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
