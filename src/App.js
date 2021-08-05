import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/shared/home/Home';
import About from './components/shared/About';
import Projects from './components/shared/Projects';
import Contact from './components/shared/Contact';
import NoMatch from './components/shared/NoMatch';
import NavBar from './components/shared/nav/NavBar';
import GlobalStyle from './styles/Global';
import {ResumeBuild} from './components/shared/resume/ResumeBuild'

// -------- MOBILE IMPORTS -------------

import NavBarMob from './mobile/navMob/NavBarMob';
import HomeMob from './mobile/home/HomeMob';
import ResumeMob from './mobile/Resume';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";
import ReactGA from 'react-ga';


library.add(fab, fas);


class App extends Component {
  state = {
    navbarOpen: false,
    pageLoaded: false, 
    width: window.innerWidth, 
    menuLoaded: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.handleWindowSizeChange);
    ReactGA.initialize('UA-166856495-1');
    ReactGA.pageview('/');  
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width, menuLoaded } = this.state
    const isMobile = width <= 800;


    if (isMobile) {
        return (
      <>
      <NavBarMob
        navbarState={this.state.navbarOpen} 
        handleNavbar={this.handleNavbar}
      />
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomeMob} />
        <Route path="/resume" component={ResumeMob} />
      </Switch>
      </>
    )} else {
      return (
        <>
        <NavBar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={ResumeMob} />

          <Route component={NoMatch} />
        </Switch>
        </>
      )
    }
}
}

export default App;
