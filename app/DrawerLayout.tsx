import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabLayout from "./(tabs)/_layout"; // Import your tabs layout
import Chapter1 from "./(tabs)/Chapter1";
import Chapter2 from "./(tabs)/Chapter2";
import Chapter3 from "./(tabs)/Chapter3";

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Tabs">
          {/* Tabs as one of the main screens */}
          <Drawer.Screen
            name="Tabs"
            component={TabLayout}
            options={{ drawerLabel: "Main Tabs" }}
          />

          {/* Chapters as part of the Table of Contents */}
          <Drawer.Screen
            name="Chapter1"
            component={Chapter1}
            options={{ drawerLabel: "Chapter 1: Introduction" }}
          />
          <Drawer.Screen
            name="Chapter2"
            component={Chapter2}
            options={{ drawerLabel: "Chapter 2: About the Campus" }}
          />
          <Drawer.Screen
            name="Chapter3"
            component={Chapter3}
            options={{ drawerLabel: "Chapter 3: Student Life" }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
