import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import './App.css';
import { Nav, About, Work } from './components';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="content">
            <Switch>
              <Route path='/work' component={Work} />
              <Route path='/press' render={() => <h1>Press</h1>} />
              <Route path='/about' component={About} />
              <Redirect to='/' />
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
