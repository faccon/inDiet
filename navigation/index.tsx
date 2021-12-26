import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParams} from '../types';
import {SplashScreen} from '../screen/SplashScreen';
import {ALERT_DIALOG, SCAN_SCREEN, SPLASH_SCREEN} from '../constants';
import {NavigationContainer} from '@react-navigation/native';
import ScanScreen from '../screen/ScanScreen';
import AlertDialog  from '../screen/AlertDialog';

const MainStack = createNativeStackNavigator<MainStackParams>();

export function Navigator({}) {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={SPLASH_SCREEN}>
        <MainStack.Screen
          component={SplashScreen}
          name={SPLASH_SCREEN}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          component={ScanScreen}
          name={SCAN_SCREEN}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          component={AlertDialog}
          name={ALERT_DIALOG}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'fade_from_bottom'
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
