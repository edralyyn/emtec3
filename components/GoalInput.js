import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({ onAddGoal }) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        if (enteredGoalText.trim() == ''){
            return;
        }

        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return(
        <View style={styles.inputContainer}>
            <TextInput placeholder='Your Course Goal'
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
            <Button color='violet' title = 'ADD GOAL'
            onPress={addGoalHandler} />
        </View>

    );
};