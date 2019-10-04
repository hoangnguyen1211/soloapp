import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FONT_SM } from '../../constants/FontConstants';

export default NotifyItem = (props) => {
    const { notify , index } = props;

    const _onGoToTarget = () => {

    }

    return (
        <TouchableOpacity 
            onPress={ () =>  _onGoToTarget() }
            style={[ styles.containerStyle, 
            { backgroundColor:  index % 2 === 0 ? '#fff' : '#f2f2f2' } 
            ]}>
            <Text style={styles.titleStyle}>
                { notify.title }
            </Text>
            <Text style={styles.textStyle}>
                { notify.content }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 10,
        borderBottomColor: '#dadada',
        borderBottomWidth: 1
    },
    titleStyle: {
        fontSize: FONT_SM,
        fontWeight: '600',
        marginBottom: 5
    },
    textStyle: {
        fontSize: FONT_SM
    }
})
