import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import MainApp from './Pages/App/MainApp';
import firebase, { rrfConfig } from './firebase';
import store from './Redux/Store';
import PageLoading from './Pages/PageLoading';

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <PageLoading>
            <MainApp />
          </PageLoading>
        </ReactReduxFirebaseProvider>
      </Provider>
    </div>
  );
}

export default App;
