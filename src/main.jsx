import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App } from './components/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { persistedStore, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
