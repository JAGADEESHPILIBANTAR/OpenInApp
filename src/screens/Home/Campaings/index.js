import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class campaings extends Component {
  render() {
    return (
       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.text}>No campaings are available</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    color:'#000000',
    fontSize:16,
    fontFamily:'Figtree-Regular'
  }
})