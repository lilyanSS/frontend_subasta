import React from "react";
import { styles } from './styles';
import Fondo from '../../Assets/images/auto.png';
import { Image } from 'react-bootstrap'
const Header = () => (
  <div>
    <div style={styles.container}>
      <Image
        style={styles.img}
        src={Fondo}
      />
    </div>
  </div>
);

export default Header;