import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter}  from 'react-router-dom'
import './css/main.css'
import App from './App';
import store from './store/index'
import {Provider} from "react-redux";

// store.subscribe((a,b,c)=>{
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(store)
//     console.log(store.getState())
// })
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

