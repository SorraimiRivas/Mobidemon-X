import { setStatusBarStyle } from "expo-status-bar";
import { Stack } from "expo-router";

const RootLayout = () => {
  setStatusBarStyle("auto");

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        animation: "simple_push",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
