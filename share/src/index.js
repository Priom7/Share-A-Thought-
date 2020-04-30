import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'



const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
      reduxFirestore(fbConfig)
  ),
);

const config = {
  ...fbConfig,
  userProfile: 'users',
  useFirestoreForProfile: true
  // And other config options
  };
  


const rrfProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance,
  attachAuthIsReady: true
};


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading data...</div>;
  return children
}


ReactDOM.render(
<Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
            <App />
        </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();