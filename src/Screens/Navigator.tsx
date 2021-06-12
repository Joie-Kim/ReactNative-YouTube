import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';

import AuthScreen from '~/Screens/AuthScreen';
import FeedScreen from '~/Screens/FeedScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{
          title: 'RnTube',
          headerTransparent: true,
          headerTintColor: '#E70915',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default () => {
  const {userInfo} = useContext<IUserContext>(UserContext);
  return (
    <NavigationContainer>
      {userInfo ? <AuthNavigator /> : <FeedNavigator />}{' '}
    </NavigationContainer>
  );
};
