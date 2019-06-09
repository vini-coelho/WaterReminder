import React from 'react';
import { Dimensions, Text, View, StyleSheet, Modal, ScrollView, TouchableOpacity } from 'react-native';

const items = [
    { value: 100 },{ value: 200 },{ value: 300 },
    { value: 400 },{ value: 500 },{ value: 600 },
    { value: 700 },{ value: 800 },{ value: 900 },
    { value: 1000 },{ value: 1100 },{ value: 1200 },
    { value: 1300 },{ value: 1400 },{ value: 1500 },
]

export default props => 
    <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
        <View style={styles.frame}>
            <View style={styles.container}>
                <Text style={styles.title}>Vou beber agora:</Text>
                <ScrollView style={styles.scroll}> 
                    {items.map((item, index) => {
                        return(
                            <TouchableOpacity key={index} onPress={() => props.onClick(item.value)}>
                                <Text style={styles.item}>{item.value} ml</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>  
            </View>
        </View>
    </Modal>

const styles = StyleSheet.create({
    scroll: {
        width: Dimensions.get('window').width
    },
    frame: {
        flex: 1,
        backgroundColor: 'rgba(1, 1, 1, 0.6)',
        justifyContent: 'flex-end',
    },
    container: {
        //position: 'absolute',
        borderTopWidth: 3,
        height: 200,
        backgroundColor: '#ddd',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#111',
        textAlign: 'center',
        margin: 3,
    },
    item: {
        fontSize: 20,
        color: '#111',
        textAlign: 'center',
    }
})

