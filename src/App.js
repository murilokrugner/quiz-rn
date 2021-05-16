import React, {useState} from 'react';
import {StyleSheet, View, Alert, Text} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';

const App = () => {
  const [name, setName] = useState('');

  const [count, setCount] = useState(0);

  function handleName() {
    if (name === '') {
      Alert.alert('Digite seu nome');
      return;
    }
    Alert.alert('Olá, ' + name);
  }

  function handleHello() {
    Alert.alert('Olá, Mundo!');
  }

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }


  return (
    <PaperProvider>
      <View style={styles.containerCount}>
        <Text style={styles.numberCount}>{count}</Text>
        <View style={styles.containerButtons}>          
          <View style={styles.buttonDecrement}>
            <Button style={styles.button} mode="contained" onPress={decrement}>
              Menos
            </Button>
          </View>
          <View style={styles.buttonIncrement}>
            <Button style={styles.button} mode="contained" onPress={increment}>
              Mais
            </Button>
          </View>
        </View>        
      </View>
      <View style={styles.container}>
        <TextInput
          label="Digite seu nome: "
          value={name}
          onChangeText={text => setName(text)}
        />
        <Button style={styles.button} mode="contained" onPress={handleName}>
          Aperte
        </Button>
        <Button style={styles.button} mode="contained" onPress={handleHello}>
          Olá Mundo!
        </Button>
      </View>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  button: {
    marginTop: 50,
  },
  containerCount: {   
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
  }, 
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    width: '100%'    
  },
  numberCount: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  }, 
  buttonIncrement: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDecrement: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
