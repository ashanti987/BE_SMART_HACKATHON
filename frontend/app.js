import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  const [backendMessage, setBackendMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with your backend's address
    fetch('http://172.20.6.242:8000/') // replaced with PC IP 
      .then((response) => response.json())
      .then((data) => {
        setBackendMessage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        setBackendMessage('Error connecting to backend: ' + error.message);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={styles.text}>{backendMessage}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});