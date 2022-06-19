import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Goals from './components/Goals/Goals';
import Ecosystem from './components/Ecosystem/Ecosystem';
import Centres from './components/Centres/Centres';
import Foodtech from './components/Foodtech/Foodtech';
import Projects from './components/Projects/Projects';
import Map from './components/Geography/Geography';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Goals />
      <Ecosystem />
      <Centres />
      <Foodtech />
      <Projects />
      <Map />
      <Partners />
      <Footer />
    
    </div>
  );
}

export default App;
