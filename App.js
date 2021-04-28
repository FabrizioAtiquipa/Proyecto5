import React, { Component } from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import TransferenceFirst from './components/Transferences/TransferenceFirst';
import TransferenceSecond from './components/Transferences/TransferenceSecond';
import TransferenceThird from './components/Transferences/TransferenceThird';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  Alert,
  useColorScheme
} from 'react-native';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TransferenceStack = createStackNavigator();

function TransferenceStackScreen() {
	return(
	<TransferenceStack.Navigator>
	   <TransferenceStack.Screen name="First" component={TransferenceFirst} />
	   <TransferenceStack.Screen name="Second" component={TransferenceSecond}/>
	   <TransferenceStack.Screen name="Third" component={TransferenceThird} />
	</TransferenceStack.Navigator>
	    )
}

function HomeScreen({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Home Screen</Text>

      <Button
      title='Go to Details'
      onPress={()=> navigation.navigate('Details')}></Button>
    </View>
  );
}

function DetailsScreen({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Details Screen</Text>

      <Button
      title='Go back to first screen in Stack'
      onPress={()=> navigation.popToTop()}></Button>
    </View>
  );
}

export default class App extends Component{


  render() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName= "Home"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}>
                <Tab.Screen
                name= "Home"
                component= {HomeScreen}
                options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />

            <Tab.Screen
                name= "Transference"
                component= {TransferenceStackScreen}
                options={{
                        tabBarLabel: 'Transference',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
            />

            <Tab.Screen
            name= "Details"
            component= {DetailsScreen}
            options={{
                    tabBarLabel: 'Details',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
}