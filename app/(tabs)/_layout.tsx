import { Tabs } from "expo-router";
import "@/global.css";

export default function TabLayout() {
  return <Tabs screenOptions={{headerShown: false}}>
    <Tabs.Screen name="index" options={{tabBarLabel: "Home", title:"Home"}}/>
    <Tabs.Screen name="subscriptions" options={{tabBarLabel: "Subscriptions", title: "Subscriptions"}}/>
    <Tabs.Screen name="insights" options={{tabBarLabel: "Insights", title: "Insights"}}/>
    <Tabs.Screen name="settings" options={{tabBarLabel: "Settings", title: "Settings"}}/>
    <Tabs.Screen name="subscriptions/[id]" options={{tabBarLabel: "Subscription Details", title: "Subscription Details", href:null}}/>
  </Tabs>
}
