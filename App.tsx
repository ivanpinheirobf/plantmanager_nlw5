import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  // caso as fonts não tenha sido carregadas ainda, usar o appLoading, que segura a tela de splash
  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}