import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextForm } from '../form';
import { HorizontalGradient } from '../gradient';
import { COLOR_WHITE } from '../../constants/ColorConstants';
import { Svg, Path, SvgUri } from 'react-native-svg';
import Icon from '../../assets/icons/logo-angular.svg';

export default TopicCourseItem = (props) => {
    const { id, title, index, icon, color, funcGoToCourseScreen } = props;
    return (
        <TouchableOpacity style={{flex: 1}} onPress={ () => funcGoToCourseScreen(id, title) }>
            <HorizontalGradient style={styles.containerStyle} colors={color}>
                <View style={styles.iconWrapperStyle}>
                    <SvgUri
                        width="100%"
                        height="100%"
                        svgXmlData={icon}
                    >
                    </SvgUri>
                </View>
                <TextForm style={styles.textStyle}>{title}</TextForm>
            </HorizontalGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        borderRadius: 10
    },
    iconWrapperStyle: {
        backgroundColor: COLOR_WHITE,
        height: 35,
        width: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 5,
        marginRight: 10
    },
    textStyle: {
        color: COLOR_WHITE
    }
})
