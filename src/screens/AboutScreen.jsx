import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const handleNamePress = () => {
    Alert.alert("Easter Egg", "You found the hidden Easter egg!");
  };

  return (
    <MainLayout>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Name of App: ToDo List App</Text>
        <TouchableOpacity onPress={handleNamePress}>
          <Text>Author Name: Billy Chan</Text>
        </TouchableOpacity>
        <Text>Current Date: {new Date().toLocaleDateString()}</Text>
      </View>
    </MainLayout>
  );
};

export default AboutScreen;
