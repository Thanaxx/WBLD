import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { GlobalStyle } from './GlobalStyles';
import Home from './pages/Home';
import Abouts from './pages/About';
import ServicesOffered from './pages/Service';
import Footer from './components/Footer';
import Contacts from './pages/Contact'
import Projs from './pages/Project';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scroll from './components/ScrollToTop'

function App() {

  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 1000,
        delay: 100,
    });
  })

  return (
    <>
      <Router>
        <Scroll />
        <Navbar />
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Abouts} />
          <Route path="/services" exact component={ServicesOffered} />
          <Route path='/portfolio' exact component={Projs} />
          <Route path="/contact" exact component={Contacts} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;

