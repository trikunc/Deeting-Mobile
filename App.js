
import 'react-native-gesture-handler';
import React from 'react';

import { Provider } from 'react-redux';
import { storeLanguage } from './src/store/index';

import RouterApp from './src/app';

const App = ({}) => {

  return (
      <Provider store={storeLanguage}>
        <RouterApp />
      </Provider>
  );

}

export default App;