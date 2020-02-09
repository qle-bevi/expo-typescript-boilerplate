import React, { ReactElement } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default (): ReactElement => (
  <View style={styles.container}>
    <Text style={styles.text}>Up and Running !</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '700'
  }
});
