import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../../Constants/colors';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Select');
  }, 2000);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Job In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 40,
    color: colors.customer.primary,
  },
});
export default SplashScreen;
