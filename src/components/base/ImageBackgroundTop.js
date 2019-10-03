import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import BgImage from '../../assets/images/group.jpg';
const { height, width } = Dimensions.get('window');

export default ImageBackgroundTop = (props) => {
    const { imageHeight, imageSource } = props;
    return (
        <View style={styles.containerStyle}>
            <View style={styles.wrapperStyle}>
                <ImageBackground
                    source={imageSource ? imageSource : BgImage}
                    style={[styles.backgroundStyle, {
                        height: imageHeight ? imageHeight : height / 2.5
                    }]}
                >
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: width,
        height:  height / 2.5,
        marginBottom: 20
    },
    wrapperStyle: {
        height: width * 2,
        width: width * 2,
        borderRadius: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        overflow: 'hidden',
        transform: [
            { translateX: -width / 2 },
            { translateY: - width * 1.15 }

        ]
    },
    backgroundStyle: {
        width: width
    },
    overlayStyle: {
        height: width / 5,
        width: width,
        backgroundColor: '#f2f2f2',

    }
})
