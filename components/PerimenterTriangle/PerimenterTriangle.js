import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles.js';

const PerimenterTriangle = () => {
  
  const [side, setSide] = useState(0);
  const [base, setBase] = useState(0);
  const [secondSide, setSecondSide] = useState(0);
  
  const getPerimeterOfTriangle = (a, b, c) => {
    let perimeter;
    return perimeter = a + b + c;
  }
  return(
  <View style={styles.triangleContainer}>
    <Text style={styles.triangleText}>Perimeter of a triangle</Text>
    <TextInput 
      style={styles.triInput} 
      onChangeText={aSide => setSide(aSide)}
      >
    </TextInput>
    <TextInput 
      style={styles.triInput}
      onChangeText={aBase => setBase(aBase)}
      >
    </TextInput>
    <TextInput 
      style={styles.triInput}
      onChangeText={bSide => setSecondSide(bSide)}
      >
    </TextInput>
    <Text style={styles.triPerimeter}>{getPerimeterOfTriangle(side, base, secondSide)}</Text>
  </View>
  )
}

export default PerimenterTriangle;