import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text styles={styles.label}>Task Title</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da Tarefa'></TextInput>

      <Text style={styles.label}>Tarefa Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da tarefa'
        multiline />

      <view style={styles.buttonContainer}>
        <Button title='Salvar'
          style={styles.buttonGreen}
          color='darkGreen'/>
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    frontSize: 16,
    marginBottom: 16
  },
  textArea: {
    heigth: 100,
    textAlingVertical: 'top'
  },
  buttonContainer: {
    marginTop: 16
  },
  buttonGreen: {
    borderRadius: 12
  }

}); 
