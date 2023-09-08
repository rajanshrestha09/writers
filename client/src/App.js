import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />

      </Routes>
  </BrowserRouter>
  );
}

export default App;
