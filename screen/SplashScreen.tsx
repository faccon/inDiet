import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {checkPerms, SplashLogo} from '../components';
import {styles} from '../styles';
import * as consts from '../constants';
import {MSProps} from '../types';

export function SplashScreen({navigation}: MSProps) {
  const clean = useRef<boolean>(false);

  function red() {
    navigation.navigate('AlertDialog');
  }

  useEffect(() => {
    checkPerms(red);

    return () => {
      clean.current = !clean.current;
    };
  }, []);

  return (
    <View style={styles.AppMain}>
      <SplashLogo size={consts.WIDTH / 2} />
    </View>
  );
}
