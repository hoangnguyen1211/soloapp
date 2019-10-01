import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextForm } from '../form';
import { HorizontalGradient } from '../gradient';
import { COLOR_WHITE } from '../../constants/ColorConstants';

export default function LanguageButton(props) {
    const { containerStyle, style, funcHandler, language } = props;
    return (
        <TouchableOpacity onPress={ () => funcHandler(language) }>
            <HorizontalGradient style={[ styles.buttonStyle, containerStyle ]}>
                <TextForm style={[ styles.titleStyle, style ]}>
                    { props.children }
                </TextForm>
            </HorizontalGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 40,
        borderRadius: 20,
        width: '100%',
        marginBottom: 15,
        justifyContent: 'center'
    },
    titleStyle: {
        color: COLOR_WHITE,
        fontWeight: '600',
        textAlign: 'center',
    }
})