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
  function HomeStackScreen({navigation}) {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} 
        options={{
          title:"Navin Learn",
          headerStyle:{backgroundColor:'#3f51b5'},
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
            alignSelf:'center',
          }
        }}
        />
        <HomeStack.Screen name="ArticleScreen" component={ArticleScreen} />
      </HomeStack.Navigator>
    );
  }
  
  const SettingsStack = createNativeStackNavigator();
  function SettingsStackScreen({navigation}) {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings" component={SettingScreen} />
      </SettingsStack.Navigator>
    );
  }
  

  const CategoryStack = createNativeStackNavigator();
  function CategoryStackScreen({navigation}) {
    return (
      <CategoryStack.Navigator>
        <CategoryStack.Screen name="Category" component={CategoryScreen} />
      </CategoryStack.Navigator>
    );
  }
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Category" component={CategoryStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
