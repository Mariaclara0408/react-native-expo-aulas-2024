import { router, Stack, useSegments } from "expo-router";
import { AppProvier } from "../hooks/Font/indexs";
import { useEffect } from "react";
import { useAuth } from "../hooks/Auth";

export default function Layout () {
    const { user } = useAuth();
    const segments = useSegments();

    useEffect(()=>{const inAuthGroup = segments[0] === "(protected)"; if (!user?.autenticaded && inAuthGroup){
        router.replace("/")
    } else{
       if (user?.autenticaded){router.replace("/(protected)");

        }
    }},[user] )

    return (
    
        <Stack>
            <Stack.Screen name="Index" options ={{headerShown: false}} />
            <Stack.Screen name="(protected)" options={{ headerShown: false}}/>
        </Stack>
     );
};

export default function Layout(){
    <AppProvier>
        <StackLayout>

        </StackLayout>
    </AppProvier>
}