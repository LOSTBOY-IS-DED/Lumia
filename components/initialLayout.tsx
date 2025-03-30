import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";



export default function InitialLayout() {
    const {isLoaded , isSignedIn} = useAuth();

    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if(isLoaded) return ;
        const inAuthScreen = segments[0] === "(auth)";
        
        if(!isSignedIn && !inAuthScreen) router.replace("/(auth)/login");  // if they aren't signed in sending them back to auth screen
        else if (isSignedIn && inAuthScreen) router.replace("/(tabs)"); // if they are signed in and on the auth screen, send them to the tabs screen
    }, [isLoaded , isSignedIn , segments]);

    if(!isLoaded) return null;

    return <Stack screenOptions={{headerShown : false}} /> // if user is already logged in we are not gonna do any if checks and just return them back to the screen

}