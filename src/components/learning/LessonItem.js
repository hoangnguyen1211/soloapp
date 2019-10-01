import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, } from 'react-native';
import { TextForm } from '../form';
import { HorizontalGradient } from '../gradient';
import { FONT_XS } from '../../constants/FontConstants';
import { COLOR_WHITE, COLOR_GREEN, COLOR_GRAY } from '../../constants/ColorConstants';
import { Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');

export default CourseItem = (props) => {
    const { lesson, funcHandler } = props;
    const active = JSON.parse(lesson.isActive);

    const _renderIcon = () => {
        if (active) {
            return <View style={[styles.iconBoxStyle, { borderColor: COLOR_GREEN }]}>
                <Icon
                    type='font-awesome'
                    name='check'
                    size={16}
                    color={COLOR_GREEN}
                />
            </View>
        }
        else {
            return <View style={[styles.iconBoxStyle, { borderColor: COLOR_GRAY }]}>
                <Icon
                    type='font-awesome'
                    name='lock'
                    size={16}
                    color={COLOR_GRAY}
                />
            </View>

        }
    }

    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity style={{flex: 1}} 
                onPress={() => active ? funcHandler(lesson.id, lesson.name) : _=>_ }>
                <View style={styles.warapperStyle}>
                    { _renderIcon() }
                    <View style={styles.textBoxStyle}>
                        <TextForm style={styles.titleStyle}>{lesson.name}</TextForm>
                        <TextForm style={styles.textStyle}>{ lesson.numberQuestion } bài tập</TextForm>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: 5,
        width: (width - 10)
    },
    warapperStyle: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: COLOR_WHITE,
        flexDirection:'row',
        alignItems: 'center',
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    iconBoxStyle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBoxStyle: {
        flex: 1,
        marginLeft: 10
    },
    titleStyle: {
        fontWeight: '600'
    },
    textStyle: {
        fontSize: FONT_XS
    },
    
})
