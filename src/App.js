import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.scss'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Home from "./components/Home/Home"
import TourList from "./components/TourList"
import Footer from "./components/Footer/Footer"
import Testimonials from "./components/Testimonials/Testimonials"

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact> 
          <Home/>
          </Route>
          <Route path="/Tours"> 
          <TourList/>
          </Route>
          <Route path="/Testimonials"> 
          <Testimonials/>
          </Route>
          <Route path="/About"> 
          <About/>
          </Route>
          
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}


export default App
