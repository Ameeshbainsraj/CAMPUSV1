import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#007AFF',
  background: '#F5F5F5',
  text: '#333',
  lightText: '#777',
};

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
});
