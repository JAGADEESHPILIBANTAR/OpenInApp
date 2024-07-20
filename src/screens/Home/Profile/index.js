import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text style={styles.text}>welcome to opanAI</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'#000000',
    fontSize:16,
    fontFamily:'Figtree-Regular'
  }
})