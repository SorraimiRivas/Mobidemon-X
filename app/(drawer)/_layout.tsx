import { Drawer } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { setStatusBarStyle } from "expo-status-bar";

const RootLayout = () => {
  setStatusBarStyle("dark");

  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default RootLayout;
