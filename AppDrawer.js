import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import AppetizersScreen from './screens/AppetizersScreen';
import MainCourseScreen from './screens/MainCourseScreen';
import DessertsScreen from './screens/DessertsScreen';

const Drawer = createDrawerNavigator();

export const HomeDrawer = ()=>{
  return(
    <Drawer.Navigator>
        <Drawer.Screen name='Welcome' component={HomeScreen}/>
        <Drawer.Screen name='Appetizers' component={AppetizersScreen}/>
        <Drawer.Screen name='Main Course' component={MainCourseScreen}/>
        <Drawer.Screen name='Desserts' component={DessertsScreen}/>
      </Drawer.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}