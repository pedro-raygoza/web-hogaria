import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import ComingSoon from './components/coming-soon/Coming-soon';
import Header from './components/header/Header';
import InfoNav from './components/info-nav/Info-nav';
import Map from './components/Map/Map';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Investments from './components/Investments/Investments';

function App() {
  return (
    <>
    <InfoNav/>
    <Nav/>
    <Header/>
    <section id="projects">
    <Projects/>
    </section>
    <section id="comingsoon">
    <ComingSoon/>
    </section>
    <section id="investments">
    <Investments/>
    </section>
    <Map/>
    <section id="contact">
    <Footer/>
    </section>
    </>
  );
}

export default App;
