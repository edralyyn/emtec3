import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalItem = ({ item, onRemove }) => {
    return(
        <View>
            <Text>{item.text}</Text>
            <Button title = 'Delete' onPress={onRemove}/>
        </View>
    );
};

export default GoalItem;