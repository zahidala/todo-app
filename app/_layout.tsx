import { Tabs } from 'expo-router/tabs';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: "/",
          headerTitle: "All Tasks",
          headerStyle: {
            backgroundColor: 'blue'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          tabBarLabel: "All Tasks"
        }}
      />
    </Tabs>
  )
}
