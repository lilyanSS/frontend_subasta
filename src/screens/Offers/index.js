import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getVehicles} from '../../Store/reducers/Admin/actions';

const Offers =()=>{
    const dispatch = useDispatch();
    dispatch(getVehicles())
    return(
        <div>
        Offers
        
        </div>
    )
}

export default Offers;