
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {
  // pageSize=15
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News pageSize={5} key='general' country='in' category='general'/>}></Route>
            <Route exact path="/business" element={<News pageSize={5} key='business' country='in' category='business'/>}></Route>
            <Route exact path="/entertainment" element={<News pageSize={5} key='entertainment' country='in' category='entertainment'/>}></Route>
            <Route exact path="/general" element={<News pageSize={5} key='general' country='in' category='general'/>}></Route>
            <Route exact path="/health" element={<News pageSize={5} key='health' country='in' category='health'/>}></Route>
            <Route exact path="/science" element={<News pageSize={5} key='science' country='in' category='science'/>}></Route>
            <Route exact path="/sports" element={<News pageSize={5} key='sports' country='in' category='sports'/>}></Route>
            <Route exact path="/technology" element={<News pageSize={5} key='technology' country='in' category='technology'/>}></Route>  
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

