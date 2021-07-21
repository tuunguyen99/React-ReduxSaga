import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import './styles/index.css'
import {  initFacebookSdk } from './helpers';
import {accountService} from './services';

initFacebookSdk()
.then(startApp);

function startApp(){
    ReactDOM.render(<App />, document.getElementById('root'))
}
