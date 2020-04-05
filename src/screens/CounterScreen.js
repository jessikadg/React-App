import React, { useState } from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';



onIncreaseButton = (counter, setCounter) => {
    setCounter(counter +1);
};

onDecreaseButton = (counter, setCounter) => {
  setCounter(counter -1);
}

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

return ( 
<View>
  <Button
   title="Increase"
   onPress={() => onIncreaseButton(counter, setCounter)}
  />
 <Button
  title="Decrease"
  onPress={() => onDecreaseButton(counter,setCounter)}
  />

 <Text>Current Count: {counter}</Text>
</View>
)};

const styles = StyleSheet.create({});

export default CounterScreen;