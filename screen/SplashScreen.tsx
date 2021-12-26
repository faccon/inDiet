import React, {useEffect, useRef} from 'react';
import {PermissionsAndroid, View} from 'react-native';
import {SplashLogo} from '../components';
import {styles} from '../styles';
import * as consts from '../constants';
import {MSProps} from '../types';

export function SplashScreen({navigation}: MSProps) {
  const clean = useRef<boolean>(false);

  async function reqPerms() {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      message: 'Access to your camera is needed to capture barcodes ',
      title: 'isDiet camera permission',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel',
    }).then((r) => {      
      navigation.replace('ScanScreen');
    });
  }

  function checkPerms() {
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(
      res => {
        if (!res) {
          reqPerms();
        } else {
          console.log(res);
          navigation.replace('ScanScreen');
        }
      },
    );
  }

  useEffect(() => {
    checkPerms();
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
