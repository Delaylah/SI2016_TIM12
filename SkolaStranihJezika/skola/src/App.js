import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import Registration from './Registration';
import User from './User';
import AdminPage from './AdminPage';
import UciteljPage from './UciteljPage';
import KorisnikPage from './KorisnikPage';
import Container1 from './KorisnikPage';


React.createElement("input", {
    // The callback passed to `onChange` will be called when `value` should change
    onChange: function(syntheticEvent) {
        // Log new `value` to JavaScript console
        console.log(syntheticEvent.target.value)
    }
})
class App extends Component {
  render () {
    return (
	<div>
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
			  <Route path='about' component={About} />
			  <Route path='contact' component={Contact} />
			  <Route path='login' component={Login} />
			  <Route path='registration' component={Registration} />
				
			  <Route path='korisnikpage' component={KorisnikPage} >
					<IndexRoute component={About} />
			  </Route>
			  <Route path='uciteljpage' component={UciteljPage} />
			  
			  <Route path='adminpage' component={AdminPage} />
			  <Route path='*' component={NotFound} />
        </Route>
      </Router>
 </div>
    )
  }
}

const Nav = () => (
  <div>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/about" activeClassName="active">O nama</Link></li>
          <li><Link to="/contact" activeClassName="active">Kontakt</Link></li>
		  <li><Link to="/login" activeClassName="active">Prijava</Link></li>
		  <li><Link to="/registration" activeClassName="active">Registracija</Link></li>
		  <li><Link to="/korisnikpage" activeClassName="active">KorisnikPage</Link></li>
		  <li><Link to="/uciteljpage" activeClassName="active">UciteljPage</Link></li>
		  <li><Link to="/adminpage" activeClassName="active">AdminPage</Link></li>
        </ul>
  </div>
)
const Container = (props) => <div>
  <Nav />
  <div className="content">
  {props.children}
</div></div>
const NotFound = () => (
  <h1>404.. This page is not found!</h1>)
export default App