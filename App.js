import React from 'react';
import Miles from './components/Miles/Miles.js';
import MilitaryTime from './components/MilitaryTime/MilitaryTime.js';
import Perimeter from './components/Perimeter/Perimeter.js';
import InchToCm from './components/InchToCm/InchToCm.js';
import PerimenterTriangle from './components/PerimenterTriangle/PerimenterTriangle.js';
import styles from './styles.js';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Miles />
        <MilitaryTime />
        <Perimeter />
        <PerimenterTriangle />
        <InchToCm />
      </ScrollView>
    </View>
    
  )
}

export default App;
