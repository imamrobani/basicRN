import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteStackParams} from '../../routes/types';

type Props = StackScreenProps<RouteStackParams, 'Splash'>;
const Splash: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={{fontSize: 20}}>Splash</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
