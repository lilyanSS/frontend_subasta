import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOffers } from '../../Store/reducers/user/actions';
import { Form, Col, Row, Card, Container, ListGroup, Button, Table } from 'react-bootstrap'
import { styles } from './styles';

import { getMoreSupply } from '../../Store/reducers/Auctions/action';

import Avatar from 'react-avatar';
import moment from 'moment';

const MyOffers = () => {
  const user = useSelector(state => state.user.user);
  const offers = useSelector(state => state.myOffers.myOffers)
  const dispatch = useDispatch();
  const [myOffers, setMyOffers] = useState([]);
  const increasedSupply = useSelector(state => state.increasedSupply);
  useEffect(() => {
    let session = user.session;
    dispatch(getMyOffers(session));
  }, [])

  useEffect(() => {
    if (offers) {
      setMyOffers(offers);
    }
  }, [offers])


  const getOffer = (id) => {
    let params = {
      "session": user.session,
      "id_vehicle": id
    }
    dispatch(getMoreSupply(params));
  }

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
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>{`${item.vehicle.data.brand} - ${item.vehicle.model}`}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Linea : {item.vehicle.line}</td>
                            </tr>
                            <tr>
                              <td>Estado : {item.vehicle.data.status}</td>
                            </tr>
                            <tr>
                              <td>Precio inicial : Q {item.vehicle_in_auction.base_price}</td>
                            </tr>
                            <tr>
                              <td>Fecha de la subasta : {moment(item.vehicle_in_auction.auction_date).format("DD-MM-YYYY")}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                      <Col xs={4}>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Mayor precio de oferta.</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{increasedSupply.data.price ? `Q ${increasedSupply.data.price}` : 'Q 00.00'}</td>
                            </tr>
                          </tbody>
                        </Table>
                        <Button variant="info" onClick={() => getOffer(item.id_vehicle)} style={styles.container}>
                          Actualizar
                        </Button>
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