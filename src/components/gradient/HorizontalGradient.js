import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { LINEAR_GRADIENT } from '../../constants/ColorConstants';

export default function HorizontalGradient(props) {
    const { style, colors } = props;
    return (
        <LinearGradient 
            style={ style } 
            colors={ colors? colors : LINEAR_GRADIENT }
            start={{x: 1, y: 0}} 
            end={{x: 0, y: 0}}
            >
            { props.children }
        </LinearGradient>
    )
}