import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import LoginScreen from './/login/Login'; // Import the Login screen from login.js

// Home Screen
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      {/* Button to navigate to Login */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// Feed Screen (Optional)
function FeedScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Welcome to the Feed Screen</Text>
    </View>
  );
}

// Create Stack Navigator
const Stack = createStackNavigator();

export default function MyCampusApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
