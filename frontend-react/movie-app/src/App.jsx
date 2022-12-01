import "./App.css";
import Footer from "./componnets/Footer";
import Header from "./componnets/Header";
import { Route, Routes } from "react-router-dom";
import About from "./componnets/pages/About";
import Home from "./componnets/pages/Home";
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
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
