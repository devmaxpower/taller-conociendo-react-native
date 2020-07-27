/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component}  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';

import Footer from './components/footer';
class App extends Component{
 render(){
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
                
            <View style={styles.sectionContainer}>
              <Text style={styles.titulo} >Imagen del proyecto base</Text>
              <Image source = { {uri : 'https://via.placeholder.com/150'}} style={styles.imagen} />
              
              <Text>
                Hola soy el body de la aplicacion, puedes poner un componente nuevo. Recuerda que en React todo puede ser un componente. La idea es reutilizar recursos.
              </Text>
            </View>
            
          </View>

        <Footer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
 }
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    color: "#ff0000"
  },
  parrafo: {
    fontSize: 20,
    color: "blue"
  },
  imagen :{
    width: 200,
    height: 300
  }
});

export default App;
