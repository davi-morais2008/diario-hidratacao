import Header from './src/components/Header';
import ActionButton from './src/components/WaterProgress';
import WaterProgress from './src/components/WaterProgress';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const GOAL = 2000;
  const [consumed, setConsumed] = useState(0)

  const handleAddWater = (amount) => {

  }

  const handleReset = () => {

  }

  return (
    <SafeAreaProvider>
      <SafeAreaView styles={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={COLOR.background} />
        <Header />
        <ActionButton />
        <WaterProgress />
      </SafeAreaView>

    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({

});
