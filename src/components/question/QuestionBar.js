import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { COLOR_ORANGE, COLOR_WHITE } from '../../constants/ColorConstants';

export default QuestionBar = (props) => {

    const { funcResetHandler, funcShowHintHandler, funcUnlockHandler } = props;

    const _renderButton = (text, iconName, funcHandler) => {
        return <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={ () => funcHandler() }>
            <Icon
                type='font-awesome'
                name={iconName}
                size={12}
                color={COLOR_ORANGE}
            />
            <Text style={styles.textStyle}>{ text }</Text>
        </TouchableOpacity>
    }

    return (
        <View style={styles.containerStyle}>
            { _renderButton('Reset', 'undo', funcResetHandler ) }
            { funcShowHintHandler ? _renderButton('Hint', 'key', funcShowHintHandler ) : null }
            { _renderButton('Unlock', 'unlock-alt', funcUnlockHandler ) }
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonStyle: {
        borderColor: COLOR_ORANGE,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginLeft: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 12,
        color: COLOR_ORANGE,
        fontWeight: '600',
        marginLeft: 3
    }
})
