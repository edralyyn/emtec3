import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

function GoalItem(props) {
    return(

        <ScrollView style={styles.listcontainer}>
        <Text style={styles.enteredText}>{'\u2764'} {props.text}</Text>
        </ScrollView>

    );
};

export default GoalItem;

const styles = StyleSheet.create({
    listcontainer: {
        backgroundColor: 'pink',
        margin: 1,
        paddingBottom: 1
      },
    enteredText: {
        padding: 5,
        fontSize: 20
      }
});