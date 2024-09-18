import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';

export default function App() {
  const {} = useAuth();
  const hanleEntrarSuper = async () =>{
    try{
      await signIn({email:"super@email.com", passworld:"Super123!"})
      router.replace("/(protected)")
    }
    catch (error){
     console.log("useEffect do layout", user)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha primeira janela!</Text>
      <Button title='Signin Super' onPress={hanleEntrarSuper}/>
      <Button title='Signin Adm' onPress={() =>signIn({email:"adm@email.com", passworld:"Adm123!"})}/>
      <Button title='Signin User' onPress={() =>signIn({email:"user@email.com", passworld:"User123!"})}/>
      <Button title='Signout'  onPress={() =>signOut({})}/>
      <Button title='auto'/>
      <Button title="Sobre" onPress={()=>router.push("/about")}/>
        <Button title="Sair do aplicativo" onPress={() => BackHandler.exitApp()}/>
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
    gap: 15,
  },
  title: {
    fontFamily: 'bold',
    fontSize: 24,
  }
});
