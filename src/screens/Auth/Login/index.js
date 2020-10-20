
import React, { useState } from "react";
import {withRouter} from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(true)
    console.log(props.history, " porpsp")
    const sendData = e => {
        e.preventDefault();

        if (!email.trim()) {
            setError("Ingrese un email");
            return
        }
        if (!password.trim()) {
            setPassword("Ingrese un password");
            return
        }
        setError(null)
    }
    return (
        <div className="mt-5">
            <h3>
                {
                    isLogin ?
                        "  Registro de usuario"
                        :
                        "Iniciar sesion"
                }
            </h3>

            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={sendData}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <input
                            type="email"
                            className="form-control mb-2"
                            placeholder="Ingrese un email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input
                            type="password"
                            className="form-control mb-2"
                            placeholder="Ingrese un password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                        <button className="btn btn-success btn-lg btn-block" type="submit">
                            {
                                !isLogin ? "iniciar sesion" : "Registrarse"
                            }

                        </button>
                        <button className="btn btn-info btn-lg btn-block"
                            onClick={() => setIsLogin(!isLogin)}
                            type="button"
                        >
                            {
                                isLogin ?
                                    "ya tienes una cuenta ?"
                                    :
                                    "No tienes cuenta?"
                            }
                        </button>
                    </form>
                </div>



            </div>
        </div>
    )
}

export default withRouter(Login);