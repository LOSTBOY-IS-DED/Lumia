import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

  const [loaded , isLoaded] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
})


  return(

    <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>

  
  <Stack>
    <Stack.Screen name="index" options={{title : "Home"}} />
    <Stack.Screen name = "notifications" options={{title : "Notifications" , headerShown : false}} />
  </Stack>;
    </SafeAreaView>
  </SafeAreaProvider>
  );
}
