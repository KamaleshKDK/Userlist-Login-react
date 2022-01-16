import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Userlist from './Userlist';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-list" element={<Userlist />} />
          <Route path="/create" element={<UserCreate />} />
          <Route path="/user-edit/:id" element={<UserEdit />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
