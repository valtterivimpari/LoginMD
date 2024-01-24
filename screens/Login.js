import React, { useState } from 'react';
import { Appbar, Button, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import MainAppbar from '../components/MainAppbar';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

  const validateForm = () => {
    const newErrors = { username: '', password: '' };

    // Validate username
    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
    }

    // Validate password
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Form is valid, proceed with submission logic
      console.log('Form submitted:', formData);
    } else {
      // Form is invalid, display errors or take appropriate action
      console.log('Form validation failed');
    }
  };

  return (
    <>
      <MainAppbar title="Login" />
      <View style={styles.container}>
        <TextInput
          label="Username"
          style={styles.input_field}
          value={formData.username}
          onChangeText={(text) => setFormData({ ...formData, username: text })}
          error={errors.username !== ''}
        />
        <TextInput
          label="Password"
          style={styles.input_field}
          keyboardType="visible-password"
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          error={errors.password !== ''}
        />
        <Button mode="contained" style={styles.button} onPress={handleSubmit}>
          Submit
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
  },
  input_field: {
    backgroundColor: '#fcfcfc',
    marginVertical: 8,
  },
  button: {
    marginVertical: 16,
  },
});
