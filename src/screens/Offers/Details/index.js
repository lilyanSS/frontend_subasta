import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getVehicles, resetAuction  } from '../../Store/reducers/Admin/actions';
import { Row, Col, Container } from 'react-bootstrap';
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
    // const dispatch = useDispatch();
    // const data = useSelector(state => state.vehicles.vehicles);
    // const [show, setShow] = useState(false);
    // const [itemCar, setItemCar] = useState([]);

    useEffect(() => {
        if (state.item.car.data) {
            let data = state.item.car.data.photos;
            let newData = []
            data.map((it) => (
                newData.push({
                    original: `${PROVIDER_API}${it.img}`,
                    thumbnail: `${PROVIDER_API}${it.img}`,
                })
            ))
            setPhotos(newData)
        }

    }, [])

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
                                                <Avatar >
                                                    <BuildIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Tipo" secondary={state.item.car.data.type} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <EventAvailableSharpIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Fecha Subasta" secondary="July 20, 2014" />
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
            </Container>
        </div>
    )
}

export default VehiclesDetails;