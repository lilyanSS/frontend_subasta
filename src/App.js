import React from 'react';
import Routers from './componentes/Routers';
import { Provider } from 'react-redux';
import store from "./Store/store.js";
import Footer from './componentes/Footer/index';
import Header from './componentes/Header/index';
function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Routers />
      <Footer />
    </Provider>
  );
}

export default App;