import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TextForm } from '../form';
import { FONT_SM } from '../../constants/FontConstants';
import { COLOR_GRAY } from '../../constants/ColorConstants';
import { Icon } from 'react-native-elements';
import UserIcon from '../../assets/icons/user_64.png';

const { width } = Dimensions.get('window');
export default function DiscussItem(props) {
    const { discuss, index, content, avatar, funcHandler } = props;
    
    const _renderInfoItem = (iconName, size, text) => {
        return <View style={styles.infoItemStyle}>
            <Icon
                name={iconName}
                type='ionicon'
                color='#517fa4'
                size={size}
            />
            <Text style={styles.infoItemTextStyle}>{text}</Text>
        </View>
    }

    return (
        <View style={[ 
                styles.containerStyle, 
                { backgroundColor: index % 2 === 0 ? '#fff' : '#f2f2f2' } 
            ]}>
            <View style={styles.avatarBoxStyle}>
                <Image
                    style={styles.imageStyle}
                    source={UserIcon}
                />
            </View>
            <TouchableOpacity style={styles.wrapperStyle}
                onPress={() => !content ? funcHandler(index) : _ => _}
            >
                <TextForm style={styles.nameStyle}>{discuss.fullname}</TextForm>
                <TextForm style={styles.titleStyle}>{discuss.title}</TextForm>
                <View style={styles.infoStyle}>
                    {_renderInfoItem('ios-list-box', 12, discuss.datetime)}
                    {_renderInfoItem('ios-chatboxes', 15, discuss.comments.length)}
                </View>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: "#f2f2f2",
        borderBottomWidth: 1
    },
    avatarBoxStyle: {
        width: width / 10,
        height: width / 10,
        borderRadius: width / 20,
        borderColor: '#808080',
        borderWidth: 2,
        padding: 2
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: width / 20
    },
    wrapperStyle: {
        flex: 1,
        paddingHorizontal: 10
    },
    nameStyle: {
        fontWeight: '600',
        color: '#000',
        fontSize: FONT_SM
    },
    titleStyle: {
        color: COLOR_GRAY,
        fontSize: FONT_SM,
        paddingBottom: 5,
        fontWeight: '600'
    },
    infoStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoItemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    infoItemTextStyle: {
        fontSize: 11,
        marginLeft: 5
    }
})

