import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createOffer, resetOfferCreated } from '../../../Store/reducers/Auctions/action';
import { Row, Col, Container, Button, Form, Alert } from 'react-bootstrap';
import { PROVIDER_API } from '../../../constants/api_backend';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import { styles } from './styles';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BuildIcon from '@material-ui/icons/Build';
import EventAvailableSharpIcon from '@material-ui/icons/EventAvailableSharp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
const VehiclesDetails = (props) => {
    const { location: { state } } = props;
    const [photos, setPhotos] = useState([]);
    const classes = useStyles();
    const [price, setPrice] = useState(0);
    const [errorCreation, setError] = useState("");
    const [success, setSuccess] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const dataCreated = useSelector(state => state.offerCreated)

    useEffect(() => {
        if (state.item.car.data) {
            let data = state.item.car.data.photos;
            let newData = [];
            data.map((it) => (
                newData.push({
                    original: `${PROVIDER_API}${it.img}`,
                    thumbnail: `${PROVIDER_API}${it.img}`,
                })
            ))
            setPhotos(newData)
        }
        setError('');
        setSuccess('');

    }, [])

    const sendOffer = () => {
        if (price <= 0) {
            setError("Ingresa el monto inicial para la subasta.")
        } else {
            let params = {
                session: user.session,
                price_offered: price,
                id_vehicle: state.item.car.id,
                user: user.id, 
                vehicle_in_auction: state.item.id
            }

            setError("")
            dispatch(createOffer(params))
        }
    }

    useEffect(() => {

        if (dataCreated.error && dataCreated.error.Error !== undefined) {
            setSuccess("")
            setError(dataCreated.error.Error);
            dispatch(resetOfferCreated());
        }

        if (Object.keys(dataCreated.data).length > 0) {
            setSuccess(dataCreated.data.data.msg);
            dispatch(resetOfferCreated());
            setError('');
        }

    }, [dataCreated])
   

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={9} style={styles.container}>
                        {
                            // photos.length > 0 ?
                            //     <Carousel keyboard={false} slide={false} fade={false} >
                            //         {

                            //             photos.map((photo, index) => (
                            //                 <Carousel.Item key={index} >
                            //                     <img
                            //                         className="d-block w-100"
                            //                         src={`${PROVIDER_API}${photo.img}`}
                            //                         alt="First slide"
                            //                     />
                            //                 </Carousel.Item>
                            //             ))
                            //         }
                            //     </Carousel>
                            //     : null

                            photos.length > 0 ?
                                <ImageGallery
                                    items={photos}
                                    showFullscreenButton={false}
                                    showNav={false}
                                    showPlayButton={true}
                                    showBullets={true}
                                />
                                :
                                ""
                        }
                    </Col>
                    <Col xs={3}>

                        {
                            state.item ?
                                <div style={styles.container}>
                                    <h2>{`${state.item.car.data.brand}  ${state.item.car.model}`}</h2>
                                    <hr />
                                    <List className={classes.root}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <CheckCircleIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Estado" secondary={state.item.car.data.status} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <BuildIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Tipo" secondary={state.item.car.data.type} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar >
                                                    <AssignmentTurnedInIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Linea" secondary={state.item.car.line} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <EventAvailableSharpIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Fecha Subasta" secondary={moment(state.item.auction_date).format("ll")} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <MonetizationOnIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Precio base" secondary={`Q${state.item.base_price}`} />
                                        </ListItem>
                                    </List>
                                </div>
                                :
                                ""
                        }
                    </Col>
                </Row>
                {
                    errorCreation && <Alert variant='danger' style={styles.container}>
                        {errorCreation}
                    </Alert>
                }
                {
                    success && <Alert variant='success' style={styles.container}>
                        {success}
                    </Alert>
                }
                <Form style={styles.form}>
                    <h2>Monto para participar en la subasta</h2>
                    <hr />
                    <Form.Group controlId="formBasic">
                        <Form.Label>Agregar monto inicial </Form.Label>
                        <Form.Control type="number" onChange={(base) => setPrice(base.target.value)} placeholder="Q 00.00" />
                    </Form.Group>
                    <Button variant="primary" onClick={() => sendOffer()}>
                        Enviar oferta
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default VehiclesDetails;