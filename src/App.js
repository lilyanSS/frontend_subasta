import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './componentes/navbar';
import Login from './screens/Auth/Login';
import Profile from './screens/Perfil';

function App(props) {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path='/' exact>
          </Route>
          <Route path='/login'>
            <Login {...props} />
          </Route>
          <Route path='/perfil'>
            <Profile {...props} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;