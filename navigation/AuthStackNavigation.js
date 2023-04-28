import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";

const AuthStack = createStackNavigator();

const AuthStackNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigation;