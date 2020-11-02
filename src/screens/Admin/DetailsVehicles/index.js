// import React from 'react';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PROVIDER_API } from '../../../constants/api_backend';
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col, Container, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { styles } from './styles';
import { createAuction } from '../../../Store/reducers/Admin/actions';


const Details = (props) => {
    const { item } = props;
    const [basePrice, setBasePrice] = useState("");
    const [errorCreation, setError] = useState("");
    const user = useSelector(state => state.user.user);
    const auction = useSelector(state => state.auction);
    const [success, setSuccess] = useState("");
    const dispatch = useDispatch();

    const lauchAuction = () => {
        if (!basePrice) {
            setError("Ingrese precio base")
        } else {
            if (parseFloat(basePrice) < parseFloat(item.price)) {
                setError("El precio base debe de ser mayor al precio del proveedor.")
            } else {
                let params = {
                    session: user.session,
                    base_price: parseFloat(basePrice),
                    id_vehicle: item.id
                }
                dispatch(createAuction(params));
                setError('')
            }
        }
    }

    useEffect(() => {
        setSuccess("");
        setError("");
        if (auction.error) {
            setError(auction.error.Error)
            setSuccess("")
        } else if (Object.keys(auction.auction).length > 0) {
            setSuccess(auction.auction.data.msg);
            setError("");
        }

    }, [auction]);

    return (
        <div>
            <Carousel keyboard={false} slide={false} fade={false} style={styles.carrusel}>
                {
                    item.data.photos.length > 0 &&
                    item.data.photos.map((photo, index) => (
                        <Carousel.Item key={index} >
                            <img
                                className="d-block w-100"
                                src={`${PROVIDER_API}${photo.img}`}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
            {
                errorCreation && (
                    <div className="alert alert-danger">
                        {errorCreation}
                    </div>
                )
            }

            {
                success && (
                    <div className="alert alert-success">
                        {success}
                    </div>
                )
            }

            <Container>
                <Row>
                    <Col xs={6}>
                        <TextField
                            disabled
                            label="Nombre del proveedor"
                            defaultValue={item.data.provider}
                            variant="outlined"
                            style={styles.space}
                        />
                    </Col>
                    <Col xs={6}>
                        <TextField
                            disabled
                            label="Estado"
                            defaultValue={item.data.status}
                            variant="outlined"
                            style={styles.space}
                        />
                    </Col>
                    <Col xs={6}>
                        <TextField
                            disabled
                            label="Modelo"
                            defaultValue={item.model}
                            variant="outlined"
                            style={styles.space}
                        />

                    </Col>
                    <Col xs={6}>
                        <TextField
                            disabled
                            label="Marca"
                            defaultValue={item.data.brand}
                            variant="outlined"
                            style={styles.space}
                        />
                    </Col>
                    <Col xs={6}>
                        <TextField
                            disabled
                            label="Tipo"
                            defaultValue={item.data.type}
                            variant="outlined"
                            style={styles.space}
                        />
                    </Col>
                    <Col xs={6}>
                        <TextField
                            disabled
                            label="Precio del provedor"
                            defaultValue={`Q ${item.price}`}
                            variant="outlined"
                            style={styles.space}
                        />
                    </Col>

                    <Col xs={6}>
                        <TextField
                            label="Precio base al publico"
                            autoComplete="Precio base al publico"
                            variant="outlined"
                            style={styles.space}
                            type='number'
                            value={basePrice}
                            onChange={(base) => setBasePrice(base.target.value)}


                        />
                    </Col>
                </Row>
                <Button variant="success" style={styles.space} onClick={() => lauchAuction()} disabled={success  ? true : false}>Lanzar a subasta</Button>
            </Container>

        </div>
    )
}

export default Details;