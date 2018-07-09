import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './componets/App';
//import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { addCharacterById } from './actions';
import rootReducer from './reducers';

  const store = createStore(rootReducer);
  console.log('store.getState()', store.getState());
  store.subscribe(() => console.log('store', store.getState()));
  store.dispatch(addCharacterById(2));
  
ReactDOM.render( 
	 <Provider store={store}> 
	  <App />
	</Provider>,
	document.getElementById('root')
);
	 
