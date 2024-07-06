import { Stack } from "expo-router";

export default function MenueStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Menu" }} />
    </Stack>
  );
}
