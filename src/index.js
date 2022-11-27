import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import store from './ReduxTest/store';
import { Provider } from 'react-redux';
import store from './Redux_Saga_Practice/store';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Redux */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

    {/* <App /> */}

  </React.StrictMode>
);

