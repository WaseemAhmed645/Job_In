import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../Constants/colors';

const Select = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {navigation.navigate('CustomerSignup')}}>
          <View style={styles.sub}>
            <View style={styles.imageView}>
              <Image
                source={require('../../Assets/Man.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.subView}>
              <Text style={styles.subTextCustomer}>ARE YOU A</Text>
              <Text style={styles.headingTextCustomer}>CUSTOMER?</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.sub}>
          <View style={styles.imageView}>
            <Image
              source={require('../../Assets/Man.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.subView}>
            <Text style={styles.subTextProvider}>ARE YOU A</Text>
            <Text style={styles.headingTextProvider}>SERVICE PROVIDER?</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.customer.primary,
    paddingHorizontal: wp(2),
  },
  sub: {
    height: hp(20),
    width: wp(80),
    backgroundColor: colors.customer.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: hp(2),
    elevation: 2,
    // shadowColor: colors.customer.black,
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // shadowRadius: 1,
  },
  image: {
    height: hp(18),
    width: wp(25),
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  imageView: {
    width: wp(30),
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  subView: {
    width: wp(35),
    marginLeft: wp(5),
  },
  subTextCustomer: {
    color: colors.customer.secondary,
    fontWeight: 'bold',
  },
  headingTextCustomer: {
    color: colors.customer.primary,
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTextProvider: {
    color: colors.customer.primary,
    fontWeight: 'bold',
  },
  headingTextProvider: {
    color: colors.customer.secondary,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default Select;
