import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getVehicles, resetAuction } from '../../Store/reducers/Admin/actions';
import { Button, Card, Modal, Row, Col, Container, ListGroup } from 'react-bootstrap';
import Details from "./DetailsVehicles";

const Admin = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.vehicles.vehicles);
    const [show, setShow] = useState(false);
    const [itemCar, setItemCar] = useState([]);

    const handleClose = () => {
        setShow(false)
        dispatch(resetAuction())
    };

    const handleShow = (item) => {
        setItemCar(item)
        setShow(true);
    }

    useEffect(() => {
        dispatch(getVehicles())
    }, [])

    return (
        <div>
            <Container >
                <Row>
                    {
                        data.length > 0 ?
                            data.map((item) => (
                                <Col xs={6} key={item.id} >
                                    <Card style={{ marginTop: 30, marginBottom: 10 }}>
                                        <Card.Img variant="top" src={item.image} style={{ height: 300 }} />
                                        <Card.Header>{`${item.data.brand} ${item.model}`}</Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Proveedor: {item.data.provider}</ListGroup.Item>
                                            <ListGroup.Item>Precio: Q{item.price}</ListGroup.Item>
                                        </ListGroup>
                                        <Card.Body>
                                            <Button variant="primary" onClick={() => handleShow(item)} >Ver detalles</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                            :
                            ""
                    }
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose} animation={false} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{Object.keys(itemCar).length > 0 ? `${itemCar.data.brand} ${itemCar.model}` : null}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Details item={itemCar} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Admin;