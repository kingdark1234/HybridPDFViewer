import React, { Component }  from 'react';
import { View, WebView } from 'react-native';
import styles from './PDFViewer.style';
 
import Pdf from 'react-native-pdf';
import PinchZoomView from 'react-native-pinch-zoom-view';
 
export default class PDFExample extends Component {
    render() {
        //const source = {uri:'http://jaondev.com/protected-pdf-example.pdf',cache:true,method:"GET"};
 
        return (
            
            <View style={styles.container}>
                 <WebView style={styles.pdf} startInLoadingState={true} source={{uri:'http://jaondev.com/protected-pdf-example.pdf'}} /> 
                
            </View>         
        )
  }
}
 
