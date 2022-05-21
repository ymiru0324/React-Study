import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';



let basicVal = [
  {id : 0, name: '멋진 신발', quan : 2}, 
  {id : 1, name: '간지 신발', quan : 3}, 
  {id : 2, name: '쩌는 신발', quan : 4}
];

function reducer(state = basicVal, action) {
  if(action.type === 'plus') {
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if(action.type === 'minus') {
    let copy = [...state];
    copy[0].quan--;
    return copy
  } else {
    return state
  }
}

let store = createStore(reducer);

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(); 