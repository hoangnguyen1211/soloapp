import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextForm } from '../form';
import { HorizontalGradient } from '../gradient';
import { COLOR_WHITE } from '../../constants/ColorConstants';
import { LESSON_SCREEN } from '../../constants/NavigatorConstants';
import { Icon } from 'react-native-elements';

export default QuestionHeader = (props) => {

    const { navigation, title, index, total } = props;
    const processWidth = Math.ceil(((index + 1) / total) * 100);

    const _renderLeftComponent = () => {
        return <TouchableOpacity onPress={ () => _onGoBackLessonScreen() }>
            <View style={[styles.iconStyle, styles.iconLeftStyle]}>
                <Icon
                    type='font-awesome'
                    name='lock'
                    size={13}
                    color={COLOR_WHITE}
                />
            </View>
        </TouchableOpacity>
    }

    const _renderRightComponent = () => {
        return <View style={[styles.iconStyle, styles.iconRightStyle]}>
            <Icon
                type='font-awesome'
                name='check'
                size={13}
                color={COLOR_WHITE}
            />
        </View>
    }

    _onGoBackLessonScreen = () => {
        navigation.navigate(LESSON_SCREEN);
    }

    return (
        <HorizontalGradient style={styles.containerStyle}>
            <View style={styles.processBoxStyle}>

                {_renderLeftComponent()}

                <View style={styles.processBarStyle}>
                    <HorizontalGradient style={[styles.barStyle, { width: `${processWidth}%` }]} />
                </View>

                {_renderRightComponent()}

            </View>
            <TextForm style={styles.titleStyle}>
                {title}
            </TextForm>
        </HorizontalGradient>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingTop: 50,
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    titleStyle: {
        fontWeight: '600',
        color: COLOR_WHITE,
        marginTop: 15,
        textAlign: 'center'
    },
    processBoxStyle: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    processBarStyle: {
        flex: 1,
        height: 10,
        borderColor: COLOR_WHITE,
        borderWidth: 1,
        backgroundColor: COLOR_WHITE,
        borderRadius: 5
    },
    barStyle: {
        flex: 1,
        borderRadius: 5
    },
    iconStyle: {
        borderWidth: 1,
        borderColor: COLOR_WHITE,
        height: 20,
        width: 20,
        padding: 2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconLeftStyle: {
        marginRight: 10
    },
    iconRightStyle: {
        marginLeft: 10
    }
})