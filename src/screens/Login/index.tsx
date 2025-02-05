import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteStackParams} from '../../routes/types';

type Props = StackScreenProps<RouteStackParams, 'Login'>;

const Login: React.FC<Props> = ({navigation}) => {
  const {navigate, goBack} = navigation;

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Login</Text>

      <Pressable onPress={() => goBack()}>
        <Text style={{fontSize: 20}}>Kembali</Text>
      </Pressable>

      <Pressable onPress={() => navigate('Home')}>
        <Text style={{fontSize: 20}}>Home</Text>
      </Pressable>
    </View>
  );
};

export default Login;
