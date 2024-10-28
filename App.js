import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from './screens/Home'
import ScreenPhotos from './screens/Photos';
import ScreenPortfolio from './screens/Portfolio';
import ScreenParam from './screens/Param';
import AllColors from './Composant/Allcolors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import './gesture-handler';

export default function App() {

  const Stack = createNativeStackNavigator();
  const osPlateforme = Platform.OS;

  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const StackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={DrawerNavigator} />
        <Stack.Screen name="Photo" component={ScreenPhotos} />
        <Stack.Screen name="Portfolio" component={ScreenPortfolio} />
        <Stack.Screen name="Param" component={ScreenParam} />
      </Stack.Navigator>);
  }


  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator screenOptions={{
        headerStyle: osPlateforme === "android" ? styles.headHomme : styles.headWEB,
        headerTitleAlign: "center",
        headerTitle: () => (<AntDesign name="home" size={24} color="black" />)
      }}>
        <Drawer.Screen name="DrawerHome" component={ScreenHome} />
        <Drawer.Screen name="DrawerPhoto" component={ScreenPhotos} />
      </Drawer.Navigator>
    );
  
  }


  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Parametres" component={StackNavigator} />
        <Tab.Screen name="Home" component={DrawerNavigator} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AllColors.blanc,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headHomme: {
    backgroundColor: AllColors.bordeau,
  },
  headWEB: {
    backgroundColor: AllColors.bleu,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center"
  }
});
