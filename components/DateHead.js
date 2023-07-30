import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHead({date}) {

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  const formatted = `${year}년 ${month}월 ${day}일`;

  const {top} = useSafeAreaInsets();  //top 넣으면 화면이 안나옴

  return (
    <>
      {/* <View style={[styles.statusBarPlacehoder, {height: top}]}> */}
      <View style={[styles.statusBarPlacehoder]}>
        <StatusBar backgroundColor='#26a69a' barStyle="light-content" />
        <View style={styles.block}>
          <Text style={styles.dateText}>{formatted}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlacehoder: {
    backgroundColor: '#26a69a'
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
