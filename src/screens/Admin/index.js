import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getVehicles } from '../../Store/reducers/Admin/actions';
import { Button, Card, Modal, Row, Col, Container } from 'react-bootstrap';
import Details from "./DetailsVehicles";

const Admin = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.vehicles.vehicles);
    const [show, setShow] = useState(false);
    const [itemCar, setItemCar] = useState([]);

    const handleClose = () => setShow(false);
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
                                    <Card style={{marginTop:30, marginBottom:10}}>
                                        <Card.Img variant="top" src={item.image}  style={{height:300}}/>
                                        <Card.Body>
                                            <Card.Title>{`${item.data.brand} ${item.model}`}</Card.Title>
                                            <Card.Text>
                                                <li>Proveedor: {item.data.provider}</li>
                                                <li>Precio: Q{item.price}</li>
                                            </Card.Text>
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

            <Modal show={show} onHide={handleClose} animation={false}>
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