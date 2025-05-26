import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";

function DrawerIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginRight: 10 }} {...props} />;
}

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: Colors[colorScheme ?? "light"].tint,
          drawerInactiveTintColor: Colors[colorScheme ?? "light"].text,
          headerShown: true,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Intoduction",
            drawerIcon: ({ color }) => <DrawerIcon name="home" color={color} />,
          }}
        />

        <Drawer.Screen
          name="Chapter1"
          options={{
            drawerLabel: "Chapter 1",
            title: "Chapter 1",
            drawerIcon: ({ color }) => <DrawerIcon name="star" color={color} />,
          }}
        />
        <Drawer.Screen
          name="Chapter2"
          options={{
            drawerLabel: "Chapter 2",
            title: "Chapter 2",
            drawerIcon: ({ color }) => <DrawerIcon name="star" color={color} />,
          }}
        />
        <Drawer.Screen
          name="Chapter3"
          options={{
            drawerLabel: "Chapter 3",
            title: "Chapter 3",
            drawerIcon: ({ color }) => <DrawerIcon name="star" color={color} />,
          }}
        />
        <Drawer.Screen
          name="Chapter4"
          options={{
            drawerLabel: "Chapter 4",
            title: "Chapter 4",
            drawerIcon: ({ color }) => <DrawerIcon name="star" color={color} />,
          }}
        />
        <Drawer.Screen
          name="Chapter5"
          options={{
            drawerLabel: "Chapter 5",
            title: "Chapter 5",
            drawerIcon: ({ color }) => <DrawerIcon name="star" color={color} />,
          }}
        />
        <Drawer.Screen
          name="Chapter6"
          options={{
            drawerLabel: "Chapter 6",
            title: "Chapter 6",
            drawerIcon: ({ color }) => <DrawerIcon name="star" color={color} />,
          }}
        />
        <Drawer.Screen
          name="Chapter7"
          options={{
            drawerLabel: "Chapter 7",
            title: "Chapter 7",
            drawerIcon: ({ color }) => <DrawerIcon name="star" color={color} />,
          }}
        />
        <Drawer.Screen
          name="Chapter8"
          options={{
            drawerLabel: "Chapter 8",
            title: "Chapter 8",
            drawerIcon: ({ color }) => <DrawerIcon name="star" color={color} />,
          }}
        />
        <Drawer.Screen
          name="Chapter9"
          options={{
            drawerLabel: "Chapter 9",
            title: "Chapter 9",
            drawerIcon: ({ color }) => <DrawerIcon name="star" color={color} />,
          }}
        />
        <Drawer.Screen
          name="Chapter10"
          options={{
            drawerLabel: "Chapter 10",
            title: "Chapter 10",
            drawerIcon: ({ color }) => <DrawerIcon name="star" color={color} />,
          }}
        />
        <Drawer.Screen
          name="two"
          options={{
            drawerLabel: "About Book",
            title: "About Book",
            drawerIcon: ({ color }) => <DrawerIcon name="book" color={color} />,
          }}
        />
        <Drawer.Screen
          name="third"
          options={{
            drawerLabel: "About Author",
            title: "About Author",
            drawerIcon: ({ color }) => <DrawerIcon name="eye" color={color} />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
