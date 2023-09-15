import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}
    ]);

  placeholdertext.clear();

  };

  return (
<View style={styles.appContainer}>

<Text style={styles.textStyle}> My List of Goals </Text>

<GoalInput onAddGoal={addGoalHandler}/>

<View style={styles.goalContainer}>
  <FlatList data = {courseGoals} renderItem={(itemData) => {
    return(
      <GoalItem text={itemData.item.text}/>
    );
  }}/>
  </View>

</View>

  );
}

const styles = StyleSheet.create({
appContainer: {
  backgroundColor:'bisque',
  flex: 1
},
goalContainer: {
  padding: 15
},
textStyle: {
  fontFamily: 'arial-narrow',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 30,
  margin: 10,
  padding: 20,
  paddingTop: 25
},

});
