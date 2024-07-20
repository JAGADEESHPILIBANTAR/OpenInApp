import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../components/RootNavigation';
import BottomTab from './BottomTabNavigation';
import CourseScren from '../screens/Home/Course';

const Stack = createNativeStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="BottomTab">

        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="CourseScren"
          component={CourseScren}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
