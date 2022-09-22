import "./App.css";
import Footer from "./componnets/Footer";
import Header from "./componnets/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App d-flex  flex-column min-vh-100">
      <header className="container">
        <Header></Header>
      </header>

      <main className="container flex-fill ">
        <Routes>
          {/* <Route path="/" element={<Home></Home>}></Route> */}
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
