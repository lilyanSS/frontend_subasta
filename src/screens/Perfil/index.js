import React, { useEffect } from "react";
import { Form, Col, Row, Image, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getPersonalInfo, getBackAccount } from '../../Store/reducers/user/actions';
import moment from 'moment';
import { styles } from './styles';
import Money from '../../Assets/images/finance.png';
import User from '../../Assets/images/user.png';
const Profile = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const bankAccount = useSelector(state => state.account);
    useEffect(() => {
        const session = data.session;
        dispatch(getPersonalInfo(session));
        dispatch(getBackAccount(session));

    }, []);

    return (
        <div>
            <Container>
                <Card style={styles.container}>
                    <Card.Body>
                        <Row>
                            <Col xs={3}>
                                <Image src={User} style={styles.Icon} thumbnail justify="center" />
                            </Col>
                            <Col xs={9}>
                                <Form as={Col}>
                                    <h2>Datos personales</h2>
                                    <hr />
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={3}>
                                            Nombre
                                    </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control value={Object.keys(user.user).length > 0 ? user.user.firstname : ""} disabled />
                                        </Col>


                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column sm={3}>
                                            Apellido
                                        </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control value={Object.keys(user.user).length > 0 ? user.user.lastname : ""} disabled />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column sm={3}>
                                            Correo
                                        </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control value={Object.keys(user.user).length > 0 ? user.user.email : ""} disabled />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={3}>
                                            Fecha ingreso
                                        </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control value={Object.keys(user.user).length > 0 ? moment(user.user.date_joined).format("MM-DD-YY") : ""} disabled />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Form></Form>
                    </Card.Body>

                </Card>
            </Container>
            <Container>
                <Card style={styles.card}>
                    <Card.Body>
                        <Row>
                            <Col xs={3}>
                            <Image src={Money} style={styles.Icon}  thumbnail  />
                            </Col>
                            <Col xs={9}>
                                <Form>
                                    <h2>
                                        Detalles de la cuenta Bancaria
                            </h2>
                                    <hr />
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={3}>
                                            Numero de cuenta
                                </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control value={Object.keys(bankAccount.account).length > 0 ? bankAccount.account.account_number : ""} disabled />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column sm={3}>
                                            Nombre de la cuenta
                                        </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control value={Object.keys(bankAccount.account).length > 0 ? bankAccount.account.account_name : ""} disabled />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column sm={3}>
                                            Saldo disponible
                                </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control value={Object.keys(bankAccount.account).length > 0 ? ` Q ${bankAccount.account.total}` : "Q 0.00"} disabled />
                                        </Col>

                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}

export default Profile;