import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Screens/MainAuth/SplashScreen';
import Select from './src/Screens/MainAuth/Select';
import CustomerLogin from './src/Screens/Customer/Auth/CutomerLogin';
import CustomerSignup from './src/Screens/Customer/Auth/CutomerSignup';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Select"
          component={Select}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CustomerSignup"
          component={CustomerSignup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
