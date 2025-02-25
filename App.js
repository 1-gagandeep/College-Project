import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './component/login';
import Otp_auth from './component/Otp-auth';

const Stack = createNativeStackNavigator();

export default function Navigation({navigation}) {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Register" >
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} onPress ={()=> navigation.navigate("Otp-auth")} />
        <Stack.Screen name="OTP-auth" component={Otp_auth} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}