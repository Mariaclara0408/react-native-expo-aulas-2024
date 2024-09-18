import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

 const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Drawer />
    </GestureHandlerRootView>
  );
 }
export default function Layout() {
  return DrawerLayout();
}
