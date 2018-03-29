/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
  Button
} from 'react-native';
import styles from './App.style';
import PDFViewer from './components/PDFViewer/PDFViewer.component';
import Icon from './components/Icon/Icon.component';
import ProptTypes from 'prop-types';

export default class App extends Component{

  render() {
    return (
      <View style={styles.container}>
        
        <PDFViewer/>    
        
      </View>
    );
  }
}

