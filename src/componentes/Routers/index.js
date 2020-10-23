import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '../../screens/Auth/Login';
import Profile from '../../screens/Perfil';
import Navbar from '../../componentes/navbar';
import { useDispatch } from 'react-redux';
import { getSession } from '../../Store/reducers/user/actions';

function Routers(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSession())
  }, [])

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
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default Routers;