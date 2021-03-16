import React from 'react';

import {View} from 'react-native';

import Home from './page/Home';

const App: React.FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Home />
    </View>
  );
};

export default App;
