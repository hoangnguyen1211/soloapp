import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { TextForm } from '../form';
import { VerticalGradient, HorizontalGradient } from '../gradient';
import { COLOR_WHITE } from '../../constants/ColorConstants';
import { FONT_XL } from '../../constants/FontConstants';
import ReactIcon from '../../assets/icons/iconfinder.png';

const { width } = Dimensions.get('window');
export default function LearnHeader(props) {
    const { title, text } = props;
    return (
        <HorizontalGradient style={styles.containerStyle}>
            <View>
                <TextForm style={styles.titleStyle}>{title}</TextForm>
                <TextForm style={styles.textStyle}>{text}</TextForm>
            </View>
            <View style={styles.imageBoxStyle}>
                <Image
                    style={styles.imageStyle}
                    resizeMode="contain"
                    source={{ uri: 'https://www.trzcacak.rs/myfile/full/64-649085_web-design-png-transparent-website-design-development.png' }}
                >
                </Image>
            </View>
        </HorizontalGradient>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyle: {
        color: COLOR_WHITE,
        fontSize: FONT_XL,
        fontWeight: '600',
        marginTop: 5
    },
    imageBoxStyle: {
        width: width / 2,
        height: width / 3
    },
    imageStyle: {
        // width: width / 3,
        width: '100%',
        height: '100%'
    },
    textStyle: {
        color: COLOR_WHITE
    }
})
