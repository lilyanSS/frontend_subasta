import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
    console.log(props, " props nav")
    return (
        <div className="navbar navbar-dark bg-primary mt-5">
            <Link className="navbar-brand" to="/">Venta de Autos S.A</Link>
            <div>
                <div className="d-flex">
                    <NavLink className="btn btn-primary mr-2" to="/" exact >
                        Inicio
                    </NavLink>
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
                    {

                    }
                    <NavLink className="btn btn-primary mr-2" to="/login">
                         Iniciar sesión
                    </NavLink>
                    <NavLink className="btn btn-primary mr-2" to="/logout">
                        Cerrar Sesión
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar;