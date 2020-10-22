
import React, { useState, useEffect } from "react";

import { setLogin } from '../../../Store/reducers/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactLoading from 'react-loading';
const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const data = useSelector(state => state.auth);
    const [loading, setLoading] = useState(data.isLoading);

    useEffect(() => {
        setLoading(data.isLoading);
        if (data !== undefined && data.error !== null) {
            setError(data.error)
        } else if (data.session !== "") {
            setError("")
            props.history.push('perfil');
        }
    }, [data])

    const sendData = () => {
        if (!email.trim()) {
            setError("Ingrese un email");
            return
        }
        if (!password.trim()) {
            setPassword("Ingrese un password");
            return
        }

        dispatch(setLogin(email, password))
    }

    const isLoading = () => {
        return (
            <div className="row justify-content-center" style={{ marginTop: 20 }}>
                <ReactLoading type={"spinningBubbles"} color={"#197BFF"} height={'5%'} width={'5%'} />
            </div>

        )
    }
    return (
        <div className="mt-5">
            <h3>
                Iniciar sesion
            </h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <div>
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
                        <button className="btn btn-success btn-lg btn-block" onClick={() => sendData()} >
                            Iniciar sesion

                        </button>

                    </div>
                    <div>
                    </div>
                </div>

            </div>
            {loading && isLoading()}
        </div>
    )
}


export default withRouter(Login);

