// App.js
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Login from './screens/Login'; // Adjust the path accordingly

export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}
