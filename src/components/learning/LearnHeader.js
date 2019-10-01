import React from 'react';
import { StyleSheet } from 'react-native';
import { TextForm } from '../form';
import { HorizontalGradient } from '../gradient';
import { COLOR_WHITE } from '../../constants/ColorConstants';
import { FONT_XL } from '../../constants/FontConstants';

export default function LearnHeader(props) {
    const { title, text } = props;
    return (
        <HorizontalGradient style={styles.titleBoxStyle}>
            <TextForm style={styles.titleStyle}>{ title }</TextForm>
            <TextForm style={styles.textStyle}>{ text }</TextForm>
        </HorizontalGradient>
    )
}

const styles = StyleSheet.create({
    titleBoxStyle: {
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    titleStyle: {
        color: COLOR_WHITE,
        fontSize: FONT_XL,
        fontWeight: '600',
        marginTop: 5
    },
    textStyle: {
        color: COLOR_WHITE
    }
})
