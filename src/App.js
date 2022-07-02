import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer/footer";
import Contactus from "./containers/Contactus/contactus";
import News from "./containers/News/news";
import Price from "./containers/Price/price";
import Team from "./containers/Team/team";
import Services from "./containers/Services/Services";
import Aboutus from "./containers/Aboutus/aboutus";
import Trial from "./containers/Trial/trial";
import Features from "./containers/Features/features";
import Home from "./containers/Home/home";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Features" element={<Features/>} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Trial" element={<Trial />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Price" element={<Price />} />
          <Route path="/News" element={<News />} />
          <Route path="/Contactus" element={<Contactus />} />
    </Routes>
    <Footer />
    </BrowserRouter>
   

  );
}

export default App;
