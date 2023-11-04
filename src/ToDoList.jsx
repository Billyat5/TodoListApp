import React from 'react';
import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView
  } from 'react-native';

  function ToDoList(props) {
    const { tasks } = props;
    
    return (
      <>
        <ScrollView>
            {tasks.map((task, index) => (
            <React.Fragment key={index}>
                <Pressable>
                    <View style={[styles.task]}>
                        <Text style={styles.taskText}>{task}</Text>
                    </View>
                </Pressable>
            </React.Fragment>
        ))}
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      backgroundColor: 'white',
      marginTop: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 2
    },
    taskText: {
      fontSize: 16,
    },
});

  
export default ToDoList;