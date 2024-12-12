import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './LoginPageStyles'; // Ensure this path is correct

export default function LoginPage({ navigation }) { // Accept navigation as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Check hardcoded credentials
    if (email === 'admin@gmail.com' && password === 'admin') {
      setError('');
      navigation.navigate('Home'); // Navigate to Home page
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.overlay}>
        <Text style={styles.header}>Welcome to MyCampusApp</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
