import React from 'react';
import './Sass/App.scss';
import About from './pages/About';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Header from './pages/Header';
import Specialties from './pages/Specialties';
import Projects from './pages/Projects';
import Knowledge from './pages/Knowledge';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Component } from 'react';
import Construction from './pages/Construction';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            {/* <Route path="/Header" component={Header} /> */}
            <Route path="/Header" component={Header} />
            <Route path="/Specialties" component={Specialties} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
            <Route path="/Blog" component={Blog} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
