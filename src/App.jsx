import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./components/Home";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
 
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"
import Search from "./components/Search";
import Register from "./components/Register";
import Login from "./components/Login";

function App(){
  return(
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;