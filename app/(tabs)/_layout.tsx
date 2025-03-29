import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{title : "Home"}} />
        <Tabs.Screen name="bookmarks" options={{title : "Bookmarks"}} />        
        <Tabs.Screen name="create" options={{title : "Create"}} />
        <Tabs.Screen name="notifications" options={{title : "Notifications"}} />
        <Tabs.Screen name="profile" options={{title : "Profile"}} />
        
    </Tabs>
  )
}