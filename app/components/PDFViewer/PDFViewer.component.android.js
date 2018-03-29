import React, { Component }  from 'react';
import { View } from 'react-native';
import styles from './PDFViewer.style';
 
import Pdf from 'react-native-pdf';
 
export default class PDFExample extends Component {
    render() {
        const source = {uri:'http://jaondev.com/protected-pdf-example.pdf',cache:true,method:"GET"};
 
        return (
            <View style={styles.container}>
                <Pdf fitWidth={true}
                    password={'1234'}
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
        )
  }
}
 
