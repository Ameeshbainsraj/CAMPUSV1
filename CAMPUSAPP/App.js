import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// Screens for the tabs
function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Welcome to the Home Screen</Text>
    </View>
  );
}

function FeedScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Welcome to the Feed Screen</Text>
    </View>
  );
}

function LoginScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Login Page</Text>
    </View>
  );
}

// Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();

export default function MyCampusApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: '#8e8e8e',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color, size }) => <FontAwesome name="rss" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => <FontAwesome name="sign-in" size={size} color={color} />,
          }}
        />
        {/* You can add more tabs here */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});