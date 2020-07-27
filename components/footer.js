import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
class Footer extends Component {
  render(){
    return (
      <>
        <View style= { style.sHeader}>
          <Text style={style.colorTextHeader}>Hola soy un footer</Text>
        </View>
      </>
    )
  }
}
const style = StyleSheet.create({
  sHeader : {
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  colorTextHeader : {
    color: '#ffffff'
  }
});
export default Footer;