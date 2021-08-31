
import 'react-native-gesture-handler';
import React from 'react';

import { Provider } from 'react-redux';
import { store } from './src/store/index';

import RouterApp from './src/app';

const App = ({}) => {

  return (
      <Provider store={store}>
        <RouterApp />
      </Provider>
  );

}

export default App;