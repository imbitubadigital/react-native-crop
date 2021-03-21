import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
