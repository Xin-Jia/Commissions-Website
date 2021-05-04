import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import FormPage from './pages/form';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/form" component={FormPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
