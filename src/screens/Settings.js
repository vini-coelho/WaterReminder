import React from 'react';
import { View, Modal, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default props => 
    <Modal onRequestClose={props.onCancel}
    visible={props.isVisible} animationType='slide'
    transparent={true}>
        <View style={styles.bg}>
            <View style={styles.container}>
                <Text style={styles.title}>Configurações</Text>
                <View style={styles.input}>
                    <Text style={styles.content}>Peso: </Text>
                    <TextInput style={styles.inputBox}
                    keyboardType='numeric'
                    placeholder='Peso em Kg'
                    onChangeText={(text) => props.onType(text)}
                    value={props.textShow}
                    />
                    <Text style={styles.content}>Kg</Text>
                </View>
                <Text style={styles.content}>Quantidade de água diária: {props.waterAmount} ml</Text>
                <TouchableOpacity onPress={props.onSave}>
                    <Text style={styles.button}>
                        Salvar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>

const styles = StyleSheet.create({
    bg:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container:{
        backgroundColor: '#eee',
        alignItems:'center',
        alignSelf: 'stretch',
        padding: 20,

    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    content: {
        fontSize: 20,
        color: '#000',

    },
    input:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    button: {
        fontSize: 20,
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#0af',
        color: '#000',
        marginTop: 10,
    },
    inputBox: {
        height: 30,
        fontSize: 15,
        color: '#000',
        borderRadius: 4,
        borderColor: '#000',
        borderWidth: 1,
    }
})

