import { StatusBar, View, Text, StyleSheet} from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/components/Header";
import WaterProgress from "./src/components/WaterProgress";
import ActionButton from "./src/components/ActionButtons";
import { COLORS } from "./src/constants/colors";
import DailyGoal from "./src/components/DailyGoal";
import Tip from "./src/components/Tip";

export default function App(){

  const [acrescimo, setAcrescimo] =  useState(0)
  const [meta, setMeta] = useState(500)

  const functionAcrescimo = (acrescimoAdd) => {
    setAcrescimo(acrescimoAdd + acrescimo)
  }

  const funcReset = () => {
    setAcrescimo(0)
  }
  
  const functioMetaAcrescimo = (metaAdd) => {
    setMeta(meta + metaAdd)
  }

  const functioMetaSubtracao = (metaSub) => {
    if (meta > 500) {
      setMeta(meta - metaSub)
    } else {
      return
    }
    
  }


  return(
    <SafeAreaProvider >
      <SafeAreaView> 
      <StatusBar barStyle={'auto'} />
      <View >
        <Header goal={meta} />
        <DailyGoal goal={meta} metaAcrescimo={functioMetaAcrescimo} metaSubtracao={functioMetaSubtracao}/>
        <WaterProgress aguaConsumida={acrescimo} objetivo={meta} />
        <ActionButton aguaAcrescimo={functionAcrescimo} reset={funcReset}/>
        <Tip />
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
