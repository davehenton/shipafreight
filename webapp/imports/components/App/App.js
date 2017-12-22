import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../../state/reducers';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

export const store = createStore(reducers, {});

const App = () => (
  <Provider store={store}>
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  </Provider>
);

export default App;
