import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login, Splash} from '../screens';
import {RouteStackParams} from './types';

const Stack = createStackNavigator<RouteStackParams>();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Router;
