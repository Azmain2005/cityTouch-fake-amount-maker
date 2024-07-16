import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, PanResponder } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const accountNumber = '2 3 0 3 7 2 9 8 6 2 0 0 1';

  // State to manage the visibility of the balance
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState('');

  // Function to load balance from AsyncStorage
  const loadBalance = async () => {
    try {
      const savedBalance = await AsyncStorage.getItem('balance');
      if (savedBalance !== null) {
        setBalance(savedBalance);
      }
    } catch (error) {
      console.error('Error loading balance: ', error);
    }
  };

  // Load balance when component mounts
  useEffect(() => {
    loadBalance();
  }, []);

  // Function to toggle balance visibility
  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  // Function to refresh balance
  const refreshBalance = () => {
    console.log('Refreshing balance...');
    loadBalance();
  };

  // PanResponder for swipe gesture
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (e, gestureState) => {
        console.log('PanResponder released. Gesture state:', gestureState);
        if (gestureState.dy < -50) { // Detect swipe up
          console.log('Swipe up detected');
          refreshBalance();
        }
      },
    })
  ).current;

  return (
    <ScrollView style={styles.container} {...panResponder.panHandlers}>
      <Image
        source={require('../image/bottom.png')}
        style={styles.bottomImage}
        resizeMode="cover"
      />
      <View style={styles.iconContainer}>
        {/* Icon placed in the top right corner */}
        <Icon name="menu" size={30} color="#fff" onPress={() => navigation.navigate("Dashboard")} style={styles.icon} />
      </View>

      <View style={styles.photoContainer}>
        <Image
          source={require('../image/topBar.png')}
          style={styles.photo}
        />
      </View>
      
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate("Lists")}>
        <Text style={styles.title}>GENERAL SAVINGS A/C</Text>
        </TouchableOpacity>
        <Text style={styles.accountNumber}>{accountNumber}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={toggleBalance}>
          <Text style={styles.buttonText}>
            {showBalance && <Text style={styles.balanceText}>{balance}</Text>}
            {showBalance ? '' : 'Tap to See Balance'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Button to refresh balance */}
      <TouchableOpacity style={styles.refreshButton} onPress={refreshBalance}>
        <Icon name="explore" size={25} color="#827E7E" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Change to desired background color
  },
  bottomImage: {
    width: '100%',
    height: windowHeight * 0.1, // Adjust the height as needed
    position: 'absolute',
    bottom: 0,
  },
  iconContainer: {
    position: 'absolute',
    top: 48, // Adjust the position as needed
    right: 40, // Adjust the position as needed
    zIndex: 1, // Ensure the icon is above other elements
  },
  icon: {
    zIndex: 1, // Ensure the icon is above the bottom image
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 8,
  },
  photoContainer: {
    position: 'relative', // Ensure the icon can be positioned relative to this container
    width: '100%',
    height: 320, // Set the height to your desired value
  },
  photo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // for Android
    marginVertical: 10,
    marginHorizontal: 50,
    marginBottom: 230,
  },
  title: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  accountNumber: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    borderRadius: 5,
    width: '50%',
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#333',
  },
  balanceText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
  // Style for the refresh button
  refreshButton: {
    position: 'absolute',
    bottom: 30, // Adjust as needed
    right: 19, // Adjust as needed
  },
});

export default Home;
