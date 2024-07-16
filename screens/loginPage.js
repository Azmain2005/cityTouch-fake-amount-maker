import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

const login = ({navigation}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <ImageBackground
      source={require('../image/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.card}>
        <Text style={styles.title}>noman7890</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter text Password"
        />
        <View style={styles.toggleContainer}>
          <TouchableOpacity onPress={handleToggle}>
            <View style={[styles.track, isToggled ? styles.trackToggled : null]}>
              <View style={[styles.thumb, isToggled ? styles.thumbToggled : null]} />
            </View>
          </TouchableOpacity>
          <Text style={styles.rememberText}>Remember ID</Text>
        </View>

        <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText} onPress={() => navigation.navigate("Home")}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.faceIdButton}>
        <Text style={styles.faceIdText} onPress={() => navigation.navigate("Home")}>Login with Face ID/Fingerprint</Text>
      </TouchableOpacity>
      <Text style={styles.bottomText}>
        New in Citytouch? Sign up now!
        {'\n'}
        Forgot User ID or Password or PIN?
      </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
    width: '90%',
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    marginBottom: 8,
    borderBottomWidth: 1, // Adding underline
    borderColor: '#ccc', // Border color of the underline
    padding: 8,
  },
  toggleContainer: {
    flexDirection: 'row',
  },
  track: {
    width: 54,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 2,
  },
  trackToggled: {
    backgroundColor: 'gray',
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  thumbToggled: {
    marginLeft: 'auto',
    backgroundColor: 'white',
  },
  rememberText: {
    marginLeft: 8,
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  
  loginText: {
    color: 'white',
    textAlign: 'center',
  },

  faceIdButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderWidth: 1,
  },
  
  faceIdText: {
    color: 'black',
    textAlign: 'center',
  },
  bottomText: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default login;
