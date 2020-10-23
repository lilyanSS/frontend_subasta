import React from 'react';
import Routers from './componentes/Routers';
import { Provider } from 'react-redux';
import store from "./Store/store.js";

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;