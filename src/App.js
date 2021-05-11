import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';

const App = () => {
  const [name, setName] = useState('');

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

  return (
    <PaperProvider>
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
});
