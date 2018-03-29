import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },modalContainer: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 10,
        borderColor: '#E9E9EA',
        borderWidth: 1
    },
    modal: {
        margin: 15
    },
    cross: {
        textAlign: 'right',
        fontSize: 18,
        color: '#B9C1C9',
        backgroundColor: 'transparent',
        padding: 5
      }
  });