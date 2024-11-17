import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegistrationScreen from './screens/RegistrationScreen';
import { HomeDrawer } from './AppDrawer';

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Registration' component={RegistrationScreen}/>
                <Stack.Screen name='Home' component={HomeDrawer} 
                options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}