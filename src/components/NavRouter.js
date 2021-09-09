import React from 'react';
import { Link,  BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function Contact() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Home() {
  return <h2>Users</h2>;
}

function Nav() {
  return (
  <Router>
     <nav >
       <h3>Logo</h3>
    <ul className='nav-links' >
        <Link to ='/about'>
        <li>
            About Us
        </li>
        </Link>
        <Link to='/contact'>
        <li>
           Contact Us
        </li>
        </Link>
        <Link to='/home'>
        <li>
           Home
        </li>
        </Link>
    </ul>
  </nav>
  <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
  </Router>
  );
}

export default Nav;