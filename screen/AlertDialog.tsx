import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {reqPerms} from '../components';
import {styles} from '../styles';
import * as consts from '../constants';

export default function AlertDIalog() {
  return (
    <View
      style={{
        position: 'absolute',
        height: consts.HEIGHT / 4,
        width: consts.WIDTH,
        backgroundColor: 'transparent',
        bottom: 0,
        borderWidth: 0.5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.AlertText}>
        Camera permission is needed to use app. Click retry to enable camera
      </Text>
      <TouchableOpacity
        style={{borderWidth: 1, borderRadius: 4, marginVertical: 20}}
        activeOpacity={0.5}
        onPress={() => reqPerms}>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            paddingHorizontal: 20,
            paddingVertical: 5,
          }}>
          Retry
        </Text>
      </TouchableOpacity>
    </View>
  );
}
