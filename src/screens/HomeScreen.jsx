import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation, tasks, onAdd }) => {
  return (
    <MainLayout>
    <SafeAreaView style={{ flex: 1 }}>
      <ToDoList tasks={tasks} />
      <ToDoForm onAdd={onAdd} />
      <Button
        title="About the App"
        onPress={() => navigation.navigate('About')}
      />
    </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
