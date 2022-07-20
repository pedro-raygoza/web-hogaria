import './App.css';
import ComingSoon from './components/coming-soon/Coming-soon';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import InfoNav from './components/info-nav/Info-nav';
import Map from './components/Map/Map';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <InfoNav/>
    <Nav/>
    <Header/>
    <Projects/>
    <ComingSoon/>
    <Contact/>
    <Map/>
    <Footer/>
    </>
  );
}

export default App;
