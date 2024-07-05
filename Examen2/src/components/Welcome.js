// src/components/Welcome.js
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exam 2</Text>
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 16,
  },
});

export default Welcome;
