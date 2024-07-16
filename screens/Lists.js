import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const transactions = [
  { date: '15-MAY-2024', description: 'CASH Deposit Cumilla Branch > Cumilla BD', type: 'deposit', amount: '1,25,000.00' },
  { date: '09-MAY-2024', description: 'CASH Deposit Cumilla Branch > Cumilla BD', type: 'deposit', amount: '85,000.00' },
  { date: '03-MAY-2024', description: 'NPSB IN/UCBL/ART 0233201000065057', type: 'deposit', amount: '78,500.00' },
  { date: '28-APR-2024', description: 'ATM WITCumilla Br RATM>Jhautola Cumilla BD', type: 'withdrawn', amount: '40,000.00' },
  { date: '20-APR-2024', description: 'NPSB IN/UCBL/ART 0233201000065057', type: 'deposit', amount: '1,32,000.00' },
  { date: '06-APR-2024', description: 'CASH Deposit Cumilla Branch > Cumilla BD', type: 'deposit', amount: '1,56,000.00' },
  { date: '28-MAR-2024', description: 'ATM WITCumilla Br RATM>Jhautola Cumilla BD', type: 'withdrawn', amount: '30,000.00' },
  { date: '17-MAR-2024', description: 'CASH Deposit Cumilla Branch > Cumilla BD', type: 'deposit', amount: '1,85,000.00' },
  { date: '03-MAR-2024', description: 'NPSB IN/UCBL/ART 0233201000065057', type: 'deposit', amount: '75,000.00' },
  { date: '16-FEB-2024', description: 'CITYTOUCH- BKASH-2413800074 71', type: 'withdrawn', amount: '15,000.00' },
  { date: '02-APR-2024', description: 'CARD FEE 371887S2094698', type: 'withdrawn', amount: '690.00' },
];

export default function Lists() {
  const [balance, setBalance] = useState('0.00');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const savedBalance = await AsyncStorage.getItem('balance');
        if (savedBalance !== null) {
          setBalance(savedBalance);
        }
      } catch (error) {
        console.error('Error fetching balance: ', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.accountInfo}>
        <Text style={styles.accountTitle}>GENERAL SAVINGS A/C</Text>
        <Text style={styles.balance}>{balance} BDT</Text>
        <Text style={styles.currentBalance}>Current Balance</Text>
      </View>
      <View style={styles.transactions}>
        <Text style={styles.filter}>Filter</Text>
        <Text style={styles.transactionsTitle}>Recent Transactions</Text>
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={[styles.amount, item.type === 'withdrawn' ? styles.withdrawn : styles.deposit]}>{item.amount}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.navBar}>
        <Image source={require('../image/bottom1.png')} style={styles.navImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'flex-end',
  },
  time: {
    color: 'white',
    fontSize: 18,
  },
  accountInfo: {
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomEndRadius: 50,
  },
  accountTitle: {
    color: 'white',
    fontSize: 24,
  },
  balance: {
    color: 'white',
    fontSize: 36,
    marginVertical: 10,
  },
  currentBalance: {
    color: '#ffc',
    fontSize: 14,
  },
  transactions: {
    flex: 1,
    padding: 5,
    backgroundColor: '#f5f5f5',
  },
  filter: {
    textAlign: 'right',
    color: 'red',
    marginBottom: 10,
    backgroundColor:'lightpink',
    padding:10,
  },
  transactionsTitle: {
    fontSize: 18,
    marginBottom: 10,
    position:'relative',
    top: -40,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 2,
  },
  date: {
    width: '20%',
  },
  description: {
    width: '18%',
    fontSize: 10,
    color: '#555',
  },
  type: {
    width: '20%',
    textAlign: 'right',
    fontSize: 12,
  },
  amount: {
    width: '25%',
    textAlign: 'right',
    fontSize: 14,
  },
  withdrawn: {
    color: 'red',
  },
  deposit: {
    color: 'red',
  },
  navBar: {
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  navImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  navText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});
