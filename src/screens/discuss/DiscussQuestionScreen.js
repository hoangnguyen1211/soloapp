import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Alert } from 'react-native';
import { BaseScreen } from '../base';
import { QuestionButton } from '../../components/question';
import { DiscussHeader } from '../../components/discuss';
import UserIcon from '../../assets/icons/user_64.png';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/DiscussActions';

class DiscussQuestionScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    _onGoBackScreen = () => {
        this.props.navigation.goBack();
    }

    _onChangeTitle = (text) => {
        if (this.state.title.length < 128) {
            this.setState({ title: text });
        }
    }

    _onChangeContent = (text) => {
        if (this.state.content.length < 512) {
            this.setState({ content: text });
        }
    }

    _onSubmitQuestion = () => {
        const { title, content } = this.state;

        if (title.length === 0) {
            Alert.alert("Vui lòng nhập tiêu đề!");
        }
        else if (content.length === 0) {
            Alert.alert("Vui lòng nhập nội dung!")
        }
        else {
            let date = new Date();
            let datetime = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

            const discuss = {
                "id": "1",
                "title": title,
                "content": content,
                "fullname": "John",
                "avatar": "",
                "datetime": datetime,
                "views": "0",
                "comments": []
            }
            this.props.postDiscussQuestion(discuss);
            this.props.navigation.navigate('DiscussScreen');
        }
    }

    render() {
        return (
            <BaseScreen nopadding>
                <DiscussHeader
                    title="Đặt câu hỏi"
                    funcGoBack={this._onGoBackScreen}
                />
                <View style={styles.wrapperStyle}>
                    <View style={styles.userInfoStyle}>
                        <Image style={styles.avatarStyle} source={UserIcon} />
                        <Text style={styles.fullnameStyle}>John</Text>
                    </View>
                    <TextInput
                        placeholder="Tiêu đề"
                        multiline={true}
                        numberOfLines={10}
                        onChangeText={(text) => this._onChangeTitle(text)}
                        value={this.state.title}
                        style={[styles.inputStyle, { fontWeight: '600' }]}
                    />
                    <View style={styles.lineStyle}>
                        <Text style={styles.numberCharactorStyle}>{this.state.title.length} / 128</Text>
                    </View>
                    <TextInput
                        placeholder="Nội dung"
                        multiline={true}
                        numberOfLines={15}
                        onChangeText={(text) => this._onChangeContent(text)}
                        value={this.state.content}
                        style={styles.inputStyle}
                    />
                    <View style={styles.lineStyle}>
                        <Text style={styles.numberCharactorStyle}>{this.state.content.length} / 512</Text>
                    </View>
                </View>
                <QuestionButton
                    name="paper-plane"
                    style={styles.buttonSubmitStyle}
                    funcHandler={this._onSubmitQuestion}
                />
            </BaseScreen>
        )
    }
}

function mapDispatch(dispatch) {
    return {
        postDiscussQuestion(discuss) {
            dispatch(actions.postDiscussQuestion(discuss))
        }
    }
}

export default connect(null, mapDispatch)(DiscussQuestionScreen);

const styles = StyleSheet.create({
    wrapperStyle: {
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    userInfoStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    avatarStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    fullnameStyle: {
        fontWeight: '600'
    },
    inputStyle: {
        padding: 10
    },
    lineStyle: {
        borderBottomColor: '#dadada',
        borderBottomWidth: 1,
        marginBottom: 15,
        marginTop: 5
    },
    numberCharactorStyle: {
        fontSize: 12,
        textAlign: 'right',
        paddingBottom: 5,
        color: '#999'
    },
    buttonSubmitStyle: {
        bottom: 10,
        right: '38%'
    }
})
