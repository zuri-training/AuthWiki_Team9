import { Home, Register, Login, Error } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import GetSupport from "./components/GetSupport";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Hero />
    <GetSupport />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
