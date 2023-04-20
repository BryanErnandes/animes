import React from "react";

import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import AnimesPrincipal from "../Pages/AnimesPrincipal";

import AnimesDetalhes from "../Pages/AnimesDetalhes";

const Tab = createBottomTabNavigator()

function Marvel() {

    return(
        <Tab.Navigator>
            <Tab.Screen name="Principal" component={AnimesPrincipal} options={{ headerShown: false }}/>
            <Tab.Screen name="Detalhes" component={AnimesDetalhes} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator()

export default function MarvelRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Pag1" component={Marvel} options={{ headerShown: false }}/>
            <Stack.Screen name="Pag2" component={Marvel} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}