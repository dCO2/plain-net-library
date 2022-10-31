import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <Router>
      <React.Fragment>
        <Navbar/>
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
