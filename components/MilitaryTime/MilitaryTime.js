import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles.js';

const MilitaryTime = () => {
  const [times, setTimes] = useState(0);
  return(
    <View style={styles.timeContainer}>
      <Text style={styles.textTitle}>Military Time</Text>
      <Text style={styles.textSen}>Enter a time between 1 to 12:</Text>
      <TextInput style={styles.timeInput}></TextInput>
    </View>
  )
}

export default MilitaryTime