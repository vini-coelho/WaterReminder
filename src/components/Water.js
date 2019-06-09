import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default props => 
    <View style={[styles.container, {height: props.alt}]}>

    </View>

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1199ff',
    },
})
