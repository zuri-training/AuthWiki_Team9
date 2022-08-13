import {
  Home,
  Register,
  Login,
  Error,
  Dashboard,
  Profile,
  ProtectedRoute,
  AllAuthLib,
  StarItem,
  UserAuthLib,
  Team,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import AuthLibrary from "./pages/Dashboard/AuthLib";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="team" element={<Team />}></Route>
          <Route path="library" element={<AllAuthLib />}></Route>
          <Route path="library/:authlibId" element={<UserAuthLib />}></Route>
        </Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SideBar />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="authlib/:authlibId" element={<AuthLibrary />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="star" element={<StarItem />}></Route>
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer style={{ fontSize: "2rem" }} />
    </BrowserRouter>
  );
}

export default App;
