import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
} from 'react-redux-i18n';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import reducers from '../../state/reducers';
import translationsObject from '../../i18n/translations';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import LearnMore from '../LearnMore';
import ViewQuotes from '../ViewQuotes';
import ViewBookings from '../ViewBookings';
import TrackShipments from '../TrackShipments';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import Footer from '../Footer/Footer';

export const hasReduxDevTools = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function' &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en-us'));

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="page">
          <Route path="/" exact component={Home} />
          <Route path="/learn-more" exact component={LearnMore} />
          <Route path="/quote" exact component={ViewQuotes} />
          <Route path="/book" exact component={ViewBookings} />
          <Route path="/track" exact component={TrackShipments} />
          <Route path="/log-in" exact component={LogIn} />
          <Route path="/sign-up" exact component={SignUp} />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
