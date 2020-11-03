import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from '../../screens/Auth/Login';
import Profile from '../../screens/Perfil';
import Navbar from '../../componentes/navbar';
import Offers from '../../screens/Offers/index';
import { useDispatch, useSelector } from 'react-redux';
import { getSession } from '../../Store/reducers/user/actions';
import Admin from '../../screens/Admin';
import VehiclesDetails from '../../screens/Offers/Details';

function Routers(props) {
  const data = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSession())
  }, [])

  const PrivateRoutes = ({ component, path, ...rest }) => {
    if (data.session !== null && data.session.length > 0) {
      return <Route component={component} path={path} {...rest} />
    } else {
      return <Redirect to="/login" {...rest} />
    }
  }

  return (
    <Router>
      <div>
        <div style={{ backgroundColor: "red", marginLeft: 5, marginRight: 5 }}>
          <Navbar {...props} />
        </div>
        <Switch>
          <Route path='/' exact />
          <Route path='/login' component={Login} exact />
          <PrivateRoutes path='/admin' component={Admin} exact />
          <PrivateRoutes path='/perfil' component={Profile} exact />
          <PrivateRoutes path='/ofertas' component={Offers} exact />
          <PrivateRoutes path='/details' component={VehiclesDetails} exact />
        </Switch>
      </div>
    </Router>
  );
}


export default Routers;