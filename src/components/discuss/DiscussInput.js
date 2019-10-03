import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { COLOR_WHITE, COLOR_ORANGE } from '../../constants/ColorConstants';

export default class DiscussInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
            height: 50
        }
    }

    _onSubmitComment = () => {
        const { content } = this.state;
        if (content.length === 0) {
            Alert.alert('Vui lòng nhập nội dung!');
        }
        else {
            this.setState({
                content: ''
            });
            this.props.onSubmitComment(content);
        }
    }

    render() {
        const { height } = this.state;
        return (
            <View style={styles.containerStyle}>
                <TextInput
                    onChangeText={(text) => this.setState({ content: text })}
                    value={this.state.content}
                    multiline={true}
                    placeholder="Nhập câu trả lời"
                    style={[styles.inputStyle, { height: Math.max(35, height) }]}
                    onContentSizeChange={(event) => {
                        this.setState({ height: event.nativeEvent.contentSize.height });
                    }}
                />
                <View style={styles.buttonStyle}>
                    <Icon
                        name='paper-plane'
                        type='font-awesome'
                        color={COLOR_ORANGE}
                        onPress={() => this._onSubmitComment()} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 15,
        paddingBottom: 30,
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderTopWidth: 1,
        borderColor: '#dadada',
        backgroundColor: COLOR_WHITE,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    inputStyle: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        paddingHorizontal: 20,
        borderRadius: 20,
        fontSize: 14,
        alignContent: 'center',
        alignSelf: 'center',
        paddingTop: 8
    },
    buttonStyle: {
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 8
    }
})

