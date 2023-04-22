import { Altos } from './components/Altos/Altos';
import Header from './components/Header/Header';
import './App.css';
import Houses from './components/Houses/Houses';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';


function App() {
  return (
    // <Router>
    <div className="App">
      <div>
        <div className="white-gradient"/>
        
        <Header/>
        
        <Altos/>
      </div>

      <section id="houses">
      <Houses/>
      </section>

      <section id="value">
      <Value/>
      </section>

      <section id="contact">
      <Contact/>
      </section>

      <section id="getstarted">
      <GetStarted/>
      </section>

      <section id="footer">
      <Footer/>
      </section>
    </div>
    
  );
}

export default App;
