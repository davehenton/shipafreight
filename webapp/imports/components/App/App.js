import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import reducers from '../../state/reducers';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';

// export const store = createStore(reducers, {});

const App = () => (
  // <Provider store={store}>
  <div>
    <NavBar />
    <Home />
  </div>
  // </Provider>
);

export default App;
