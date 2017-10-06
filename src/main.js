import React from 'react';
import ReactDOM from 'react-dom';
import style from '../style/main.scss';

import { AppContainer } from 'react-hot-loader';
import App from './app';

ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>
, document.querySelector('.container'));

if (module.hot) {
  module.hot.accept('./src/app', () => { render(App) });
}