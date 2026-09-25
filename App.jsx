import { StatusBar, View, Text, StyleSheet} from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/components/Header";
import WaterProgress from "./src/components/WaterProgress";
import ActionButton from "./src/components/ActionButtons";


export default function App(){
  const GOAL = 2000
  const waterConsumed = 1600

  const [acrescimo, setAcrescimo] =  useState(0)
  
  

  return(
    <SafeAreaProvider>
      <SafeAreaView> 
      <StatusBar barStyle={'auto'} />
      <View >
        <Header goal={GOAL} />
        <WaterProgress aguaConsumida={waterConsumed} objetivo={GOAL} />
        <ActionButton />
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

