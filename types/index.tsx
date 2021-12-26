import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationProp } from '@react-navigation/native';

export interface splashLogoProps {
    size: number;
  }

export interface cleanUpProps {
    clean: React.MutableRefObject<boolean>
  }

export type MainStackParams = {
  SplashScreen : undefined
  ScanScreen : undefined
  AlertDialog: undefined
}

export type MSProps = NativeStackScreenProps<MainStackParams, 'SplashScreen'>
export type ASProps = NativeStackScreenProps<MainStackParams, 'AlertDialog'>