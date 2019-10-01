import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import BgImage from '../../assets/images/group.jpg';

const { height, width } = Dimensions.get('window');

export default ImageBackgroundTop = (props) => {
    const { imageHeight, imageSource } = props;
    return (
        <ImageBackground 
            source={ imageSource ? imageSource : BgImage } 
            style={[ styles.backgroundStyle, { height: imageHeight ? imageHeight : height / 2.5 } ]}
        >
            <View style={ styles.overlayStyle }></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: width,
        justifyContent: 'flex-end'
    },
    overlayStyle: { 
        height: "15%", 
        backgroundColor: '#fff', 
        borderTopLeftRadius: 25, 
        borderTopRightRadius: 25 
    }
})
