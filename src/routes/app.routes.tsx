import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../page/Home';
import {DatePiker} from '../page/Datepicker';

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
        name="DatePiker"
        component={DatePiker}
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
