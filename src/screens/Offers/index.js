import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container, } from 'react-bootstrap';

import { getPersonalInfo } from '../../Store/reducers/user/actions';
import { getList } from '../../Store/reducers/Auctions/action';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Offers = (props) => {
  const data = useSelector(state => state.auth);
  const list = useSelector(state => state.launches.list);
  const dispatch = useDispatch();

  const classes = useStyles();
  useEffect(() => {

    if (data.session !== null && data.session.length > 0) {
      dispatch(getPersonalInfo(data.session));
      dispatch(getList());
    }
  }, [])

  const showCar = (item) => {
    props.history.push('/details', { item });
  }

  return (
    <div>
      <Container >
        <Row>
          {
            list.length > 0 ?
              list.map((item) => (
                <Col xs={4} key={item.id} style={{ marginTop: 20 }}>
                  <Card className={classes.root}> 
                    <CardActionArea onClick={()=>showCar(item)}>
                      <CardMedia
                        component="img"
                        alt="car"
                        height="250"
                        image={item.car.image}
                        title="Car"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {`${item.car.data.brand} - ${item.car.model}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          precio base: {`Q${item.base_price}`}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>

                </Col>
              ))
              :
              ""
          }
        </Row>
      </Container>
    </div>
  )
}

export default withRouter(Offers);