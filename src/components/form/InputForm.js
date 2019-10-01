import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default InputForm = (props) => {

    const { funcHandler, password, name, placeholder, center, style } = props;

    return (
        <View style={ styles.container }>
            <TextInput 
                style={[ styles.inputStyle, { textAlign: center ? 'center' : 'auto' }, style ]}
                secureTextEntry={ password ? true : false }
                onChangeText={ (text) => funcHandler(name, text) }
                placeholder={ placeholder }
                >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20
    },
    inputStyle: {
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 20,
        backgroundColor: "#dedede",
        shadowColor: '#f2f2f2',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3
    }
})
