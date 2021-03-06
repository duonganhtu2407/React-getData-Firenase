import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {reduxFirestore, getFirestore} from "redux-firestore"
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { reactReduxFirebase, getFirebase} from "react-redux-firebase"
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import firebase from './config/fbConfig';




const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
    reduxFirestore(firebase),
    
  )
  );
ReactDOM.render(
  <Provider store={store}>
     
        <App />
     
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
