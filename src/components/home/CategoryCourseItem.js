import React from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TextForm } from '../form';

const { width } = Dimensions.get('window');
const widthItem = (width - 10) / 3;
export default CategoryCourseItem = (props) => {
    const { course, funcHandler } = props;
    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={() => funcHandler(course.id)}>
            <View style={styles.containerStyle}>
                <View style={styles.wrapperStyle}>
                    <View style={styles.imageBoxStyle}>
                        <Image source={{ uri: course.image }} style={styles.imageStyle} />
                    </View>
                    <TextForm style={styles.textStyle}>{ course.name }</TextForm>
                </View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: widthItem,
        marginBottom: 10,
        padding: 5
    },
    wrapperStyle: {
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBoxStyle: {
        width: widthItem - 25,
        height: widthItem - 25,
        borderRadius: (widthItem - 25) / 2
    },
    imageStyle: {
        flex: 1,
        borderRadius: (widthItem - 25) / 2
    },
    textStyle: {
        marginTop: 7,
        marginBottom: 0
    }
})
