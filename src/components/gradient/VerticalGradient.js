import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { LINEAR_GRADIENT } from '../../constants/ColorConstants';

export default function VerticalGradient(props) {
    const { style, colors } = props;
    return (
        <LinearGradient style={ style } colors={ colors ? colors : LINEAR_GRADIENT } >
            { props.children }
        </LinearGradient>
    )
}
