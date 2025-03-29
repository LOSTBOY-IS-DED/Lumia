import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarShowLabel : false}}>
        <Tabs.Screen name="index" options={{tabBarIcon : ({size, color}) => <Ionicons name="home" size={size} />}} />
        <Tabs.Screen name="bookmarks" options={{tabBarIcon : ({size, color}) => <Ionicons name="bookmark" size={size} />}} />       
        <Tabs.Screen name="create" options={{tabBarIcon : ({size, color}) => <Ionicons name="add-circle" size={size} />}} />
        <Tabs.Screen name="notifications" options={{tabBarIcon : ({size, color}) => <Ionicons name="heart" size={size} />}} />
        <Tabs.Screen name="profile" options={{tabBarIcon : ({size, color}) => <Ionicons name="person-circle" size={size} />}} />
        
    </Tabs>
  )
}