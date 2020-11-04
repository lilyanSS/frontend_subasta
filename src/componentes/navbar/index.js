import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { LogoutSession } from '../../Store/reducers/user/actions';
import { styles } from './styles';

const Navbar = (props) => {
    const data = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const Logout = () => {
        props.history.push('/login');
        dispatch(LogoutSession(data.session))
    }

    return (
        <div>
            <div className="navbar navbar bg" style={styles.container}>
                <Link className="navbar-brand" to='/'></Link>
                <div>
                    <div className="d-flex">

                        {
                            data.session !== null && data.session !== undefined && data.session.length > 0 ?
                                <div>
                                    <NavLink className="btn btn mr-2" to="/ofertas" style={styles.container} exact>
                                        Ofertas
                                </NavLink>
                                    <NavLink className="btn btn  mr-2" to="/admin" style={styles.container} exact>
                                        admin
                                 </NavLink>
                                    <NavLink className="btn btn mr-2" to="/perfil" style={styles.container} exact>
                                        Mi perfil
                                </NavLink>
                                    <NavLink className="btn btn mr-2" to="/estadisticas" exact style={{ color: "white" }}>
                                        Estadisticas
                                </NavLink>
                                    <button className="btn btn mr-2" onClick={() => Logout()} style={styles.container}>Cerrar Sesion</button>
                                </div>
                                :
                                <div>
                                    <NavLink className="btn btn mr-2" to="/" style={styles.container} exact  >
                                        Inicio
                                    </NavLink>
                                    <NavLink className="btn btn  mr-2" to="/login" style={styles.container} exact>
                                        Iniciar sesión
                                    </NavLink>
                                </div>

                        }

                    </div>
                </div>

            </div>
        </div >
    )
}

export default withRouter(Navbar);