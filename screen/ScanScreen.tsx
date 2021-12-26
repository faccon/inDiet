import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SplashLogo} from '../components';
import {styles} from '../styles';
import * as consts from '../constants';
// @ts-ignore
import Micons from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import BarcodeScanner from 'react-native-scan-barcode';

export default function ScanScreen() {
  const [flash, setflash] = useState(false);

  function toggleFlash() {
    setflash(!flash);
  }

  function barcodeReceived(e: object) {
    console.log(e);
  }

  return (
    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <BarcodeScanner
        onBarCodeRead={barcodeReceived}
        style={{flex: 1}}
        torchMode={flash ? 'on' : 'off'}
        cameraType="back"
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 40,
          bottom: 40,
          marginVertical: 20,
          paddingHorizontal: 2,
          paddingVertical: 2,
        }}
        activeOpacity={0.5}
        onPress={toggleFlash}>
        <Micons name={flash ? 'flash-off' : 'flash'} size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}
