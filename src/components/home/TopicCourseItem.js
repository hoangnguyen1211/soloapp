import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { TextForm } from '../form';
import { VerticalGradient } from '../gradient';
import { COLOR_WHITE } from '../../constants/ColorConstants';

const { width } = Dimensions.get('window');
export default TopicCourseItem = (props) => {
    const { topic, index, funcGoToCourseScreen } = props;
    console.log(topic);

    return (
        <TouchableOpacity style={styles.containerStyle}
            onPress={() => funcGoToCourseScreen(topic.id, topic.name, topic.image)}>
            <ImageBackground
                source={{ uri: topic.image }}
                style={styles.wrapperStyle}
            >
                <VerticalGradient 
                    style={styles.overlayStyle}
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.2)', '#666']}
                >
                    <TextForm style={styles.titleStyle}>{topic.name}</TextForm>
                </VerticalGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: width / 2,
        paddingHorizontal: 5,
        borderRadius: 10,
        marginBottom: 10
    },
    wrapperStyle: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 5,
        width: '100%',
        height: width / 3,
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 1
        },
        position: 'relative'
    },
    overlayStyle: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 5,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    titleStyle: {
        paddingVertical: 5,
        fontWeight: '600',
        color: COLOR_WHITE
    }
})
