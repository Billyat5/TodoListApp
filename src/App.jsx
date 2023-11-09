import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen'; 

const Stack = createStackNavigator();

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Study'
  ]);

  const handleAdd = (newTask) => {
    if (tasks.includes(newTask)) {
      alert("Task already exists!");
      return;
    }
    setTasks([...tasks, newTask]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} tasks={tasks} onAdd={handleAdd} />}
        </Stack.Screen>
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
