import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import './App.css';
import { Nav, About, Work, Press, Footer, Home } from './components';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="content">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/work' component={Work} />
              <Route path='/press' component={Press} />
              <Route path='/bio' component={About} />
              <Redirect to='/' />
            </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
