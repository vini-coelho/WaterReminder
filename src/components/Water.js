import React from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width
const { height } = Dimensions.get('window').height

export default props => 
    <View>
        <View style={styles.bubbleContainer3}>
            <View style={[styles.bubble2, {backgroundColor: '#11aaff'}]}></View>
            <View style={[styles.bubble2, {backgroundColor: '#11aaff'}]}></View>
            <View style={[styles.bubble2, {backgroundColor: '#11aaff'}]}></View>
        </View>
        <View style={styles.bubbleContainer2}>
        <View style={[styles.bubble, {backgroundColor: '#11ccff'}]}></View>
            <View style={[styles.bubble, {backgroundColor: '#11ccff'}]}></View>
            <View style={[styles.bubble, {backgroundColor: '#11ccff'}]}></View>
            <View style={[styles.bubble, {backgroundColor: '#11ccff'}]}></View>
            <View style={[styles.bubble, {backgroundColor: '#11ccff'}]}></View>
        </View>
        <View style={styles.bubbleContainer}>
            <View style={styles.bubble}></View>
            <View style={styles.bubble}></View>
            <View style={styles.bubble}></View>
            <View style={styles.bubble}></View>
        </View>
        
        <Animated.View style={[styles.container, {height: props.alt}]}>
        </Animated.View>
    </View>

const styles = StyleSheet.create({
    bubble: {
        top: 0,
        height: windowWidth/4,
        width: windowWidth/4,
        borderRadius: windowWidth/8,
        backgroundColor: '#1199ff'
    },
    bubble2: {
        top: 0,
        height: windowWidth/3,
        width: windowWidth/3,
        borderRadius: windowWidth/6,
        backgroundColor: '#1199ff'
    },
    container: {
        backgroundColor: '#1199ff',
        height: 0,
    },
    bubbleContainer: {
        position: 'absolute',
        top: windowWidth/3.5,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
    },  
    bubbleContainer2: {
        position: 'absolute',
        top: windowWidth/3.3,
        left: windowWidth/8,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
    },  
    bubbleContainer3: {
        right: 0,
        bottom: 0,
        top: windowWidth/3.6,
        flexDirection: 'row',
    }, 
})
