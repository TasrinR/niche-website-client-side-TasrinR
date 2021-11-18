import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home/Home/Home';
import Explore from './components/Explore/Explore';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './components/contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Purchase from './components/Purchase/Purchase';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
