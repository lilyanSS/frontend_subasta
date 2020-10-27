import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { LogoutSession } from '../../Store/reducers/user/actions';


const Navbar = (props) => {
    const data = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const Logout = () => {
        props.history.push('/login');
        dispatch(LogoutSession(data.session))
    }

    return (
        <div className="navbar navbar-dark bg-primary mt-5">
            <Link className="navbar-brand" to="/">Venta de Autos S.A</Link>
            <div>
                <div className="d-flex">
                    <NavLink className="btn btn-primary mr-2" to="/" exact >
                        Inicio
                    </NavLink>
                    {
                        data.session !== null && data.session !== undefined  && data.session.length > 0?
                            <div>
                                <NavLink className="btn btn-primary mr-2" to="/admin">
                                    admin
                                 </NavLink>
                                <NavLink className="btn btn-primary mr-2" to="/ofertas">
                                    Ofertas
                                </NavLink>
                                <NavLink className="btn btn-primary mr-2" to="/perfil">
                                    Mi perfil
                                </NavLink>
                                <NavLink className="btn btn-primary mr-2" to="/estadisticas">
                                    Estadisticas
                                </NavLink>
                                <button className="btn btn-primary mr-2" onClick={() => Logout()}>Cerrar Sesion</button>
                            </div>
                            :
                            <NavLink className="btn btn-primary mr-2" to="/login">
                                Iniciar sesión
                        </NavLink>

                    }

                </div>
            </div>

        </div>
    )
}

export default withRouter(Navbar);