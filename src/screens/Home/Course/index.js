import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CourseScren = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>No courses are available</Text>
    </View>
  );
};

export default CourseScren;

const styles = StyleSheet.create({
  text:{
    color:'#000000',
    fontSize:16,
    fontFamily:'Figtree-Regular'
  }
});
