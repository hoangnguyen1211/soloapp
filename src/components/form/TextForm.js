import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FONT_SM } from '../../constants/FontConstants';

export default function TextForm(props) {
    const { style, center } = props;
    return (
        <Text style={[ 
            styles.textStyle, 
            { textAlign: center ? 'center' : 'auto' },  
            style ]}
        >
            { props.children }
        </Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: FONT_SM,
        marginBottom: 5
    }
})
