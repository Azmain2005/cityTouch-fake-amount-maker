import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({ navigation }) => {
  const [newBalance, setNewBalance] = useState('');

  const saveBalance = async () => {
    try {
      await AsyncStorage.setItem('balance', newBalance);
      navigation.goBack(); // Go back to the previous screen after saving
    } catch (error) {
      console.error('Error saving balance: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Balance</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>New Balance:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNewBalance}
          value={newBalance}
          placeholder="Enter new balance"
          keyboardType="numeric"
        />
      </View>
      <Button title="Save Balance" onPress={saveBalance} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', // Set background color to red
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white', // Set text color to white
  },
  formContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white', // Set text color to white
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white', // Set input border color to white
    backgroundColor: 'white', // Set input background color to white
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default Dashboard;
