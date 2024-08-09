import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Employee from './components/Employee';
import Category from './components/Category';
import Profile from './components/Profile';
import AddCategory from './components/Addcategory';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="employee" element={<Employee />} />
            <Route path="category" element={<Category />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add_category" element={<AddCategory />} />
            <Route path="add_employee" element={<AddEmployee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
