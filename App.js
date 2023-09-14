import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { FlatList } from 'react-native-web';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  //const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  //function goalInputHandler(enteredText) {
    //setEnteredGoalText(enteredText);
  //};

  const addGoalHandler = (goalText) => {
    const newGoal = {text: goalText, Key: Math.random().toString()};
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, newGoal]);
  };

  const removeGoalHandler = (goalKey) => {
    setCourseGoals((currentCourseGoals) => currentCourseGoals.filter((goal) => goal.key !== goalKey));
  };

return (
<View style={styles.appContainer}>
    <ScrollView>
        <View style={styles.subcontainer}>
            <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                    My List of Goals
                </Text>
            </View>
            <View style={styles.container}>
                <GoalInput onAddGoal={addGoalHandler}/>
                <View style={styles.appContainer}>
                    <GoalList goals={courseGoals} onRemoveGoal={removeGoalHandler}/>
                </View>
            </View>
        </View>
    </ScrollView>
</View>

  );
}

const styles = StyleSheet.create({
appContainer: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16,
  margin: 10,
  backgroundColor:'bisque'
},
container: {
    flex: 1,
    backgroundColor: 'white'
},
subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    paddingTop: 12,
},
titlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    paddingTop: 8,
},
inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 24,
  paddingTop: 24,
  borderBottomWidth: 1,
  borderColor: '#cccccc',
  flex: 1
},
textInput: {
  borderWidth: 3,
  borderColor: 'crimson',
  marginRight: 10,
  padding: 5,
  width: '70%'
},
goalContainer: {
  flex: 10,
  paddingTop: 15
},
titletext: {
  fontFamily: 'arial-narrow',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 30,
},
enteredText: {
  padding: 5,
  fontSize: 20
}

});
