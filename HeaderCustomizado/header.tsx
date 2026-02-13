// Deve ser implementado no RootLayout

import { useSession } from "@/hooks/useSession";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigationState } from "@react-navigation/native";
import { Stack, router, useSegments } from "expo-router";
import { useEffect } from "react";
import { StatusBar, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Tranforma o nome do arquivo em título
const getTituloTela = (routeName?: string) => {
  if (!routeName) return '';

  const titulos: Record<string, string> = {
    usuarios: 'Usuários',
    nome_do_arquivo: "Título"
  };

  return titulos[routeName] ?? routeName;
};

// Header Customizado
const Header = () => {

  const route = useNavigationState(
    state => state.routes[state.index]
  );

  return(
  <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent:'center', padding: 15 }}>

    {/*Seta de voltar*/}
    <TouchableOpacity onPress={() => router.back()} style={{ position: 'absolute', left: 10, padding: 10, }}>
      <MaterialIcons name="arrow-back-ios" size={24} color="dark-gray" />
    </TouchableOpacity>

    {/*Título*/}
    <View style={{ height: 30, paddingHorizontal: 10, alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{getTituloTela(route?.name)}</Text>
    </View>
  </View>
  )
};

export default function RootLayout() {
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={"dark-content"} translucent={false} backgroundColor="white"/>
      <Stack screenOptions={{
        animation: 'none',  
        headerBackTitle: '' ,
        headerBackVisible: false,
        header: () => <Header/>,
        }}>
          
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="usuarios" options={{ headerShown: true }} />
      </Stack>
    </SafeAreaView>
  );
}