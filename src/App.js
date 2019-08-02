import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import World from './components/World';
import Tech from './components/Tech';
import Nigeria from './components/Nigeria';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Navbar />
        <Route exact path="/" component={World} />
        <Route path="/tech" component={Tech} />
        <Route path="/nigeria" component={Nigeria} />
        <Route path="/about" component={About} />
      
      </div>
    </BrowserRouter>
  );
}

export default App;
