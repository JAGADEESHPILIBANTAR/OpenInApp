import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
 Link,
 ActiveLinks,
 Files,
 Activefile,
 Media,
 Activemedia,
 Generic,
 Activegeneric,
} from '../assets';
import colors from '../utils/colors';
import {useTheme} from 'react-native-paper';
import {connect} from 'react-redux';
// import Link from '../screens/Home/Links';
import Links from '../screens/Home/Links';
import Courses from '../screens/Home/Course';
import ProfileScreen from '../screens/Home/Profile';
import campaings from '../screens/Home/Campaings';

const Tab = createMaterialBottomTabNavigator();

function MyTabs(props) {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneAnimationEnabled={false}
      activeColor={colors.btnColor}
      inactiveColor={'#A7AEC1'}
      barStyle={{backgroundColor: colors.white, elevation: 1, position: 'absolute', bottom: 0, left: 0, right: 0}}>
      <Tab.Screen
        name="Home"
        component={Links}
        options={{
          title: 'Home',
          tabBarLabel: (
            <Text style={{fontFamily: 'Figtree-Regular', fontSize: 12}}>
              Links
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <ActiveLinks /> : <Link />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          title: 'Courses',
          tabBarLabel: (
            <Text style={{fontFamily: 'Figtree-Regular', fontSize: 12}}>
              Courses
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <Activefile /> : <Files />}
              </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={campaings} // Use your desired component here
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image style={{height:80,width:80,bottom:24}} source={require('../assets/plus.png')}/>
            </View>
          ),
          tabBarLabel: () => null, // Hide the label
        }}
      />
      <Tab.Screen
        name="Campaings"
        component={campaings}
        options={{
          title: 'campaings',
          tabBarLabel: (
            <Text style={{fontFamily: 'Figtree-Regular', fontSize: 12}}>
              Campaigns
            </Text>
          ),
          tabBarBadge: props.cartcountInfo,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <Activemedia /> : <Media />}
              </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarLabel: (
            <Text style={{fontFamily: 'Figtree-Regular', fontSize: 12}}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <Activegeneric /> : <Generic />}
              </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

function mapStateToProps(state) {
  return {
    cartcountInfo: state.cartcountData,
  };
}

export default connect(mapStateToProps)(MyTabs);
