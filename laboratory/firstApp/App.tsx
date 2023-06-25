import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

function Row({children}: React.PropsWithChildren): JSX.Element {
  return <View style={{flexDirection: 'row', columnGap: 15}}>{children}</View>;
}

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Row>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </Row>
        <Row>
          <View style={styles.box} />
          <View style={styles.box} />
        </Row>
        <Row>
          <View style={styles.box} />
        </Row>
        <Row>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </Row>
        <Row>
          <View style={styles.box} />
        </Row>
      </ScrollView>
    </SafeAreaView>
  );

const styles = StyleSheet.create({
  box: {
    flexGrow: 1,
    marginTop: 10,
    marginBottom: 30,
    height: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 16,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOffset: {height: 10, width: 0},
    shadowOpacity: 0.17,
  },
  container: {
    paddingHorizontal: 15,
    rowGap: 10,
  },
});
