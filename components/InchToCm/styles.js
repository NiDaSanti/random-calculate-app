import {StyleSheet} from 'react-native';
import {colors} from '../../styles.js';

export default StyleSheet.create({
  inchContainer: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 15,
    padding: 10,
  },
  instruction: {
    fontWeight: 'bold',
    fontFamily: 'Menlo', 
    textAlign: 'center',
    fontSize: 20,
  },
  inchInput: {
    height: 40,
    borderRadius: 15,
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Menlo',
    fontSize: 25,
  },
  cm: {
    fontFamily: 'Menlo',
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
  },
})