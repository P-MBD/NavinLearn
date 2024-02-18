import React, {useEffect, useState} from 'react';
import { Text,FlatList,View,ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import SettingScreen from './screen/SettingScreen';
import CategoryScreen from './screen/CategoryScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
         title:"Navin Learn",
         headerStyle:{backgroundColor:'#3f51b5',},
         headerTintColor:'#fff',
          headerTitleStyle:{
             fontWeight:'bold',
             alignSelf:'center',
         }
        }} />
     <HomeStack.Screen name="SettingScreen" component={SettingScreen} />
    </HomeStack.Navigator>
  )
const SettingStackScreen = ({navigation})=>{
    <HomeScreen.Navigator>
        <HomeScreen.Screen name="SettingScreen" component={SettingScreen}></HomeScreen.Screen>
    </HomeScreen.Navigator>
  }

const CategoryStackScreen = ({navigation})=>{
    <HomeScreen.Navigator>
        <HomeScreen.Screen name="CategoryScreen" component={CategoryScreen}></HomeScreen.Screen>
    </HomeScreen.Navigator>
  }
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({color, size})=> {
          let iconName;
          if(route.name=="Home"){
            iconName="ios-home";
          }
          else if(route.name=="Category"){
            iconName="logo-rss";
          }
          else if(route.name== "Settings"){
             iconName="ios-settings";
          }
          return 
        }
      })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Category" component={CategoryStackScreen} />
        <Tab.Screen name="Settings" component={SettingStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
