import React from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    Button
  } from 'react-native';

function ToDoForm({onAdd}){
  const [taskText, setTaskText] = React.useState('');

  const handleAdd = () => {
    onAdd(taskText);
    setTaskText('');
  }

    return (
        <>
        <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                    onChangeText={(text) => setTaskText(text)}
                    value={taskText}
                />
                <Button title="Add" onPress={handleAdd} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2
  },
});

export default ToDoForm;