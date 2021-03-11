import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles.js';

const InchToCm = () => {
  const [convert, setConvert] = useState(0);
  
  const handleConversion = inch => {
    let cm;
    return cm = 2.54 * inch;
  }
  return(
    <View style={styles.inchContainer}>
      <Text style={styles.instruction}>Convert Inches to Centimeter</Text>
        <TouchableOpacity>
          <TextInput
            style={styles.inchInput}
            onChangeText={num => setConvert(num)}
          >
          </TextInput>
        </TouchableOpacity>
      <Text style={styles.cm}>{handleConversion(convert).toFixed(0)} cm.</Text>
    </View>
  );
}

export default InchToCm;