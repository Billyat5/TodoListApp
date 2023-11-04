import React, {useState} from 'react';
import {
  SafeAreaView} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


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
    <SafeAreaView>
      <ToDoList tasks= {tasks}/>
      <ToDoForm onAdd={handleAdd}/>
    </SafeAreaView>
  );
}



export default App;