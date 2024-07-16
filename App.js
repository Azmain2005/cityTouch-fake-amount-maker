import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/loginPage';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import Lists from './screens/Lists';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={login} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Dashboard" options={{ headerShown: false }} component={Dashboard} />
        <Stack.Screen name="Lists" options={{ headerShown: false }} component={Lists} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default MyStack;
