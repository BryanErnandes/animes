import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import { StatusBar } from "react-native";
import MarvelRoutes from "./src/Routers/routers";

export default function App() {
  return (
    <NavigationContainer>
      <MarvelRoutes />
      <StatusBar backgroundColor='#000000' barStyle='light-content' translucent={false} />
    </NavigationContainer>
  
  );
}
