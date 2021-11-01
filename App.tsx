import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './src/screens/Home';
import { COLORS } from './src/styles/themes';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [ fontloading ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontloading)
    return <AppLoading />

  return (
    <>
      <StatusBar backgroundColor={COLORS.BLACK_SECONDARY} style="light" />
      <Home />
    </>
  );
}
