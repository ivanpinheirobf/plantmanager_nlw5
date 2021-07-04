import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import colors from '../styles/colors';
import { PlantSelect } from '../pages/PlantSelect';
import { MyPlants } from '../pages/MyPlants';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
        },
      }}
    >
      <AppTab.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ color, size }) =>
            <Feather
              name='plus-circle'
              size={size}
              color={color}
            />
        }}
      />

      <AppTab.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) =>
            <Feather
              name='list'
              size={size}
              color={color}
            />
        }}
      />
    </AppTab.Navigator>
  );
}

export default AuthRoutes;