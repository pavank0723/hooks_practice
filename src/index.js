import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import store from './ReduxTest/store';
import { Provider } from 'react-redux';
import store from './Redux_Saga_Practice/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* Redux */}
    <Provider store={store}>
      <App />
    </Provider>
   
    {/* <App /> */}

  </React.StrictMode>
);

