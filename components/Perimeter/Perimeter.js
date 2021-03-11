import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity} from 'react-native';
import styles from './styles.js';

const Perimeter = () => {
  
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  
  const getPerimeterOfSquare = (a, b) => {
    let perimeter;
    return perimeter = a * 2 + b * 2;
  }
  return(
    <View style={styles.perimeterContainer}>
      <Text style={styles.perimeterText}>Perimeter of a square/rectangle.</Text>
      <View>
        <TouchableOpacity>
          <TextInput 
            style={styles.width}
            onChangeText={aValue => setWidth(aValue)}
          >
          </TextInput>
        </TouchableOpacity>
        <TouchableOpacity>
          <TextInput 
            style={styles.width}
            onChangeText={bValue => setHeight(bValue)}
          >
          </TextInput>
        </TouchableOpacity>
        <Text style={styles.perimeter}>{getPerimeterOfSquare(width, height)}</Text>
      </View>
    </View>
  )
}

export default Perimeter;