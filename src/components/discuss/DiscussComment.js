import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import UserIcon from '../../assets/icons/user_64.png';

const { width } = Dimensions.get('window');
export default function DiscussAnswer(props) {
    const { comment, index } = props;
    return (
        <View style={[ 
                styles.containerStyle,  
                { backgroundColor: index % 2 === 0 ? '#fff' : '#f2f2f2'}
            ]}>
            <View style={styles.wrapperStyle}>
                <Text>{comment.content}</Text>
                <View style={styles.infoCommentStyle}>
                    <View style={{paddingRight: 5}}>
                        <Text style={styles.fullnameStyle}>{comment.fullname}</Text>
                        <Text style={styles.datetimeStyle}>{comment.datetime}</Text>
                    </View>
                    <Image
                        style={styles.imageStyle}
                        source={UserIcon}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderColor: '#f2f2f2',
        borderBottomWidth: 1
    },
    wrapperStyle: {
        padding: 10
    },
    imageStyle: {
        width: width / 12,
        height: width / 12,
        borderRadius: width / 24,
        borderColor: '#808080',
        borderWidth: 2
    },
    infoCommentStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5
    },
    fullnameStyle: {
        fontSize: 11,
        fontWeight: '600',
        marginBottom: 2,
        textAlign: 'right'
    },
    datetimeStyle: {
        fontSize: 11
    }
})
