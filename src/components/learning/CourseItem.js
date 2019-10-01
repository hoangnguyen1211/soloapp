import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { TextForm } from '../form';
import { COLOR_WHITE } from '../../constants/ColorConstants';
import { FONT_SM } from '../../constants/FontConstants';
import { Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');
export default CourseItem = (props) => {
    const { course, funcHandler } = props;

    const active = JSON.parse(course.isActive);
    return (
        <View style={styles.containerStyle}>
            <View style={styles.warapperStyle}>
                <TouchableOpacity style={{ flex: 1 }}
                    onPress={() => active ? funcHandler(course.id, course.name) : _=>_}>
                    <View style={styles.imageBoxStyle}>
                        <Image source={{ uri: course.image }} style={styles.imageStyle} />
                        <View style={[styles.overlayStyle, { display: active ? 'none' : 'flex' }]}>
                            <View style={[styles.iconBoxStyle]}>
                                <Icon
                                    type='font-awesome'
                                    name='lock'
                                    size={20}
                                    color={COLOR_WHITE}
                                />
                            </View>
                        </View>
                    </View>
                    <TextForm style={styles.textStyle}>
                        {course.name}
                    </TextForm>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const widthItem = (width - 10) / 2;
const imageWidth = widthItem - 40;
const styles = StyleSheet.create({
    containerStyle: {
        padding: 5,
        width: widthItem,
        marginBottom: 10
    },
    warapperStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBoxStyle: {
        height: imageWidth,
        width: imageWidth,
        borderRadius: imageWidth / 2,
        position: 'relative'
    },
    imageStyle: {
        flex: 1,
        borderRadius: imageWidth / 2
    },
    textStyle: {
        marginTop: 10,
        fontSize: FONT_SM,
        fontWeight: '600',
        textAlign: 'center'
    },
    overlayStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: imageWidth / 2
    },
    iconBoxStyle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLOR_WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
