import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './LoginPageStyles'; // Import the external styles

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
    } else {
      console.log("Logging in with:", { email, password });
      setError('');
    }
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/videos/background.mp4')}
        style={styles.backgroundVideo}
        isMuted
        isLooping
        shouldPlay
        resizeMode="cover"
      />
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

export default LoginPage;