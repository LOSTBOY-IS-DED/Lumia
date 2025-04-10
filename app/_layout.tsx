import { useFonts } from "expo-font";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InitialLayout from "@/components/initialLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";

const publishablekey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishablekey) {
  throw new Error("Missing publishable key");
}

export default function RootLayout() {
  const [loaded, isLoaded] = useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  return (
    <ClerkAndConvexProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <InitialLayout />
          {/* <Stack screenOptions={{headerShown : false}}>
    <Stack.Screen name="index" options={{title : "Home"}} />
    <Stack.Screen name = "notifications" options={{title : "Notifications" , headerShown : false}} />
  </Stack>; */}
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkAndConvexProvider>
  );
}
