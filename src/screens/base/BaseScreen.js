import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default function BaseScreen(props) {
    const { style, imageSource, nopadding } = props;
    return (
        <ImageBackground 
            source={ imageSource ? imageSource : null}
            style={ styles.imageBackgroundStyle }>
            <View style={[
                styles.containerStyle, 
                { paddingHorizontal: nopadding ? 0 : 20 }, 
                style
            ]}>
                {props.children}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackgroundStyle: {
        width: width,
        height: height
    },
    containerStyle: {
        flex: 1,
        width: width
    }
})
