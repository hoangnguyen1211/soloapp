import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { COLOR_WHITE, COLOR_GRAY, COLOR_ORANGE } from '../../constants/ColorConstants';

export default QuestionButton = (props) => {

    const { type, name, size, color, backgroundColor, funcHandler, style } = props;

    return (
        <View style={[ styles.containerStyle, style ]}>
            <TouchableOpacity onPress={ () =>  funcHandler() }>
                <View style={[ styles.wrapperStyle, 
                    { backgroundColor: backgroundColor ? backgroundColor : COLOR_ORANGE } ]}>
                    <Icon
                        type={type ? type : 'font-awesome'}
                        name={name ? name : 'arrow-right'}
                        size={size ? size : 20}
                        color={color ? color : COLOR_WHITE}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 20,
        paddingBottom: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    wrapperStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLOR_GRAY,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2
        }
    }
})