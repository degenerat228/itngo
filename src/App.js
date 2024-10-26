import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import Contact from './Contact';
import AboutContent from './AboutContent';
import Work from './Work';
import PricingCard from './PricingCard';
import Footer from './Footer';
import Navbar from './Navbar';
import MainPage from './MainPage';

function App() {
  return (
    <div>
    <Navbar/>
    <MainPage/>
    <AboutContent/>
    <Work/>
    <PricingCard/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
