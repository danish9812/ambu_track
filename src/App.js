import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import SignUp from './pages/signup.js';


function App() {
  return (
    <div>
    <Router>
      

      <Navbar />
      
            <Routes>
        
        <Route path='pages/' exact component={Home} />
        <Route path='pages/contact-us' component={Contact} />
        <Route path='pages/sign-up' component={SignUp} />
      </Routes>
    

      </Router>

    <div style={{ 
     backgroundColor: '#ccffff',

     width: '1366px',
     height: '577px'
/*      backgroundImage: `url(${process.env.PUBLIC_URL + '/home.jpg'})`,
      backgroundRepeat: 'no-repeat',
      
      width:'100%' */ 
      /*By Danish Zubari */
    }}>
      <br></br><h1 align="center"> Track Your Ambulance</h1>
      <br></br><br></br>
      <img class="map"    src="map.jpeg" alt="Map" ></img>

      <br></br><br></br>
      <h1 align="center">Track in just one easy step</h1>
<br></br>
      <p class="pragraph">
        This app is used for tracking the ambulance. Where is it and where its going. You can find the ambulance via tracking number and driver name and driver contact details.
        You can send the query to the hospital regarding the tracking.
      </p>
      <footer class="footer">
        <div class="container">
            <div id="ftr-wrap">
                <div class="ftr-links">
                    <ul>
                        <li><a href="#">Feedback</a></li>     
                        <li><a href="#">Privacy Policy</a></li>     
                        <li><a href="#">About us</a></li>     
                    </ul>
                </div>
                <div class="copyright-amazon">
                    <p class="copyright">&copy; All Rights Reserved@2022</p>
                    
                </div>
                <div>
                    <p class="Help">Help</p>
                </div>     
            </div>
        </div>
    </footer>

    </div>



    </div>
  );
}

export default App;
