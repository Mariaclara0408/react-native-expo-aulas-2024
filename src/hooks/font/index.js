import {useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { View, text, AntivityIndicator } from "react-native";

const FontProvier = createContext({})

export function FontProvier({ children }){

    const [loaded, error] = useFonts({
        regular: require("../../assets/fonts/Andika-Regular.ttf"),
        bold: require("../../assets/fonts/Andika-Bold.ttf"),
        italic: require("../../assets/fonts/Andika-Italic.ttf"),
        bolditalic: require("../../assets/fonts/Andika-BoldItalic.ttf")
    });

    if (loaded && error ) {

      return <View styale={{flex: 1, justifyContent: "center", alingItems: "center"}}>
        <Text styale={{ fontSize: 28, marginTop: 15}}> Carregando as fontes... </Text>
        <AntivityIndicator size ="large" color ="#0000ff"/> 
        
        </View>
    }

    return <FontContext.Provier value={{loaded}}>{children}</FontContext.Provier>

}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new error("useFont must be used within a FontProvier")
    }

    return context;
}

