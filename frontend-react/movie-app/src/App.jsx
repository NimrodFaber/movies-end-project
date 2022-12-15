import "./App.css";
import Footer from "./componnets/Footer";
import Header from "./componnets/Header";
import { Route, Routes } from "react-router-dom";
import About from "./componnets/pages/About";
import Home from "./componnets/pages/Home";
import SignIn from "./componnets/pages/SignIn";
import Signup from "./componnets/pages/SignUp";
import Logout from "./componnets/pages/logout";
import Movies from "./componnets/pages/movies";
import ProtectedRoute from "./componnets/coomon/protectedrout";
import Favorite from "./componnets/pages/Favoriets";
function App() {
  return (
    <div className="App d-flex  flex-column min-vh-100">
      <header className="container">
        <Header></Header>
      </header>

      <main className="container flex-fill ">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/signin"
            element={<SignIn redirect={"/"}></SignIn>}
          ></Route>
          <Route
            path="/signup"
            element={<Signup redirect="/"></Signup>}
          ></Route>
          <Route
            path="/logout"
            element={<Logout redirect="/signin"></Logout>}
          ></Route>
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Movies></Movies>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/favorite"
            element={
              <ProtectedRoute>
                <Favorite />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
