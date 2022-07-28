import { Home, Register, Login, Error } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Hero />
    <GetSupport />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer style={{ fontSize: "2rem" }} />
    </BrowserRouter>
  );
}

export default App;
