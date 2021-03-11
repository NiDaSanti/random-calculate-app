import React, {useState} from 'react';
import styles from './styles.js';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

const Miles = () => {
  const [values, setValues] = useState(0);
  
  const handleConverstionToFeet = (mile,feet) => {
     return feet = mile * 5280;
  }

  return (
    <View style={styles.measureContainer}>
      <Text style={styles.text}>How many Feet in a Mile</Text>
        <TouchableOpacity>
          <TextInput 
            style={styles.feetInput}
            onChangeText={value => setValues(value)}
            >
          </TextInput>
        </TouchableOpacity>
      <Text style={styles.feetValue}>{handleConverstionToFeet(values).toFixed(0)} ft.</Text>
    </View>
  )
}

export default Miles;