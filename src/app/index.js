import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/auth';

export default function App() {
  const {} = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha primeira janela!</Text>
      <Button title='Signin Super' onPress={() =>signIn({email:"super@email.com", passworld:"Super123!"})}/>
      <Button title='Signin Adm' onPress={() =>signIn({email:"adm@email.com", passworld:"Adm123!"})}/>
      <Button title='Signin User' onPress={() =>signIn({email:"user@email.com", passworld:"User123!"})}/>
      <Button title='Signout'  onPress={() =>signOut({})}/>
      <Button title='auto'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'bold',
    fontSize: 24,
  }
});
