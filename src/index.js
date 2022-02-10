import React from 'react';
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import App from './App';
import './App.css';
import './favicon.ico';
import 'logeeport-ui/dist/index.css';
import 'typeface-lato';
import 'typeface-montserrat';
const store = configureStore();

render(
  <App history={history} store={store} />,
  document.getElementById('app')
);

moduleHotAccept(module);

export function moduleHotAccept(mod) {
  if (mod.hot) {
    mod.hot.accept('./App', () => {
      const NewApp = require('./App').default;
      render(
        NewApp({ history, store }),
        document.getElementById('app')
      );
    });
  }
}
