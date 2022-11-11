import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <React.Fragment>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/search' element={<Search/>} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
