import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './i18n';
import * as serviceWorker from './serviceWorker';
import Loading from './loading';

const App = lazy(() => import('./App'));

// bind modal to appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
