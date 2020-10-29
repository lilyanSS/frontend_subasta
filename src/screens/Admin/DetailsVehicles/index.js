import React from 'react';
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { PROVIDER_API } from '../../../constants/api_backend';
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col, Container, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { styles } from './styles';
const Details = (props) => {
    const { item } = props;

    return (
        <div>
            <Carousel keyboard={false} slide={false} fade={false} >
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
                        />
                    </Col>
                </Row>
                <Button variant="success" style={styles.space}>Lanzar a subasta</Button>
            </Container>

        </div>
    )
}

export default Details;