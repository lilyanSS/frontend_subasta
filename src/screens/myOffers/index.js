import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOffers } from '../../Store/reducers/user/actions';
import { Form, Col, Row, Card, Container, ListGroup, Button } from 'react-bootstrap'
import { styles } from './styles';

import Avatar from 'react-avatar';
import moment from 'moment';

const MyOffers = () => {
  const user = useSelector(state => state.user.user);
  const offers = useSelector(state => state.myOffers.myOffers)
  const dispatch = useDispatch();
  const [myOffers, setMyOffers] = useState([]);
  useEffect(() => {
    let session = user.session;
    dispatch(getMyOffers(session));
  }, [])

  useEffect(() => {
    if (offers) {
      setMyOffers(offers);
    }
  }, [offers])

  return (
    <div style={styles.container}>

      <Container>
        <Row>
          <Col>
            {
              myOffers.data &&

              myOffers.data.map((item) => (

                <Card style={styles.container} key={item.id}>
                  <Card.Body>
                    <Row>
                      <Col xs={4} >
                        <Avatar size="200" src={item.vehicle.image} round={true} />
                      </Col>
                      <Col xs={4}>
                        <h3>{`${item.vehicle.data.brand} - ${item.vehicle.model}`}</h3>
                        <ListGroup variant="flush">
                          <ListGroup.Item>Linea : {item.vehicle.line}</ListGroup.Item>
                          <ListGroup.Item>Estado : {item.vehicle.data.status}</ListGroup.Item>
                          <ListGroup.Item>Precio inicial : Q {item.vehicle_in_auction.base_price}</ListGroup.Item>
                          <ListGroup.Item>Fecha de la subasta : {moment(item.vehicle_in_auction.auction_date).format("DD-MM-YYYY")}</ListGroup.Item>
                        </ListGroup>
                      </Col>
                      <Col xs={4}>
                        Mayor Ofertante

                      </Col>
                    </Row>
                    <Form>
                      <Form.Group>
                        <Form.Label>Precio ofrecido</Form.Label>
                        <Form.Control disabled value={`Q ${item.price_offered}`} />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Nueva precio a ofrecer</Form.Label>
                        <Form.Control type="numeric" placeholder="Q 00.00" />
                      </Form.Group>
                      <Button variant="success">
                        Lanzar Oferta
                    </Button>
                    </Form>
                  </Card.Body>
                </Card>
              ))
            }
          </Col>
        </Row>


      </Container>
    </div>

  )
}






export default MyOffers;