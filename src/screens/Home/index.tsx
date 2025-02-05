import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteStackParams} from '../../routes/types';

type Props = StackScreenProps<RouteStackParams, 'Home'>;
const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Home</Text>
        <Text style={{fontSize: 32}}>back To login</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Splash')}>
        <Text style={{fontSize: 32}}>Go To Splash</Text>
      </Pressable>

      <Pressable onPress={() => navigation.push('Home')}>
        <Text style={{fontSize: 32}}>PUSH HOME</Text>
      </Pressable>
    </View>
  );
};

export default Home;
