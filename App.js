import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Players from './screens/Players';
import Scores from './screens/Scores';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Players" component={Players} />
        <Stack.Screen name="Scores" component={Scores} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

