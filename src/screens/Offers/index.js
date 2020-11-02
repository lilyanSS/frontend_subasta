import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import {  getPersonalInfo } from '../../Store/reducers/user/actions';
const Offers =()=>{
    const data = useSelector(state => state.auth);
    const dispatch = useDispatch();
    if (data.session !== null && data.session.length > 0) {
      dispatch(getPersonalInfo(data.session))
    }
    
    return(
        <div>
        Offers
        
        </div>
    )
}

export default Offers;