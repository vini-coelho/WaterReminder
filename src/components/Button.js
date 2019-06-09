import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default props => 
    <TouchableOpacity onPress={props.onClick} style={styles.container}>
        <Text style={styles.text}>Beber Água</Text>
    </TouchableOpacity>

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderColor: '#1F1F1F',
        borderRadius: 5,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: 'center',
    },  
    text: {
        fontSize: 25,
        color: '#1F1F1F',
        textAlign: 'center',
    }
})

