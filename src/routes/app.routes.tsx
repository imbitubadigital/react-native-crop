import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../page/Home';
import {PageForm} from '../page/PageForm';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      initialRouteName={'home'}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <App.Screen
        name="PageForm"
        component={PageForm}
        options={{
          cardStyle: {
            backgroundColor: '#318FBA',
          },
        }}
      />
      <App.Screen name="Home" component={Home} />
      {/* <App.Screen name="Camera" component={Camera} /> */}
    </App.Navigator>
  );
};

export default AppRoutes;
