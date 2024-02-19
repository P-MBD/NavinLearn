import React, {useEffect, useState} from 'react';
import { Text,FlatList,View,ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import SettingScreen from './screen/SettingScreen';
import CategoryScreen from './screen/CategoryScreen';
import ArticleScreen from './screen/ArticleScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const HomeStackScreens = ({navigation}) => (
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
     <HomeStack.Screen name="ArticleScreen" component={ArticleScreen} />
    </HomeStack.Navigator>
  )
const SettingStackScreens = ({navigation})=>{
    <HomeScreen.Navigator>
        <HomeScreen.Screen name="SettingScreen" component={SettingScreen}></HomeScreen.Screen>
    </HomeScreen.Navigator>
  }

const CategoryStackScreens = ({navigation})=>{
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
            iconName="home";
          }
          else if(route.name=="Category"){
            iconName="logo-rss";
          }
          else if(route.name== "Settings"){
             iconName="settings";
          }
          return 
        }
      })}
      >
        <Tab.Screen name="Home" component={HomeStackScreens} />
        <Tab.Screen name="Category" component={CategoryStackScreens} />
        <Tab.Screen name="Settings" component={SettingStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
