import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseScreen } from '../base';
import { TitleForm, TextForm, InputForm, ButtonForm, TextLink } from '../../components/form';
import { ImageBackgroundTop } from '../../components/base';
import { COLOR_RED } from '../../constants/ColorConstants';
import { GET_CODE_SCREEN, HOME_SCREEN } from '../../constants/NavigatorConstants';

export default class SignInScreen extends Component {


    _onChangeInputHandler = (name, text) => {

    }

    _onSubmitFormHandler = () => {
        this.props.navigation.navigate(HOME_SCREEN);
    }

    _onForgotPassword = () => {
        this.props.navigation.navigate(GET_CODE_SCREEN, { forgotPass: true });
    }

    _onGetCodeScreen = () => {
        this.props.navigation.navigate(GET_CODE_SCREEN);
    }

    render() {
        return (
            <BaseScreen style={styles.containerStyle}>
                <ImageBackgroundTop />
                <View style={styles.wapperStyle}>
                    <View>
                        <TitleForm center style={styles.titleStyle}>Đăng nhập</TitleForm>
                        <InputForm
                            name="email"
                            placeholder="Email"
                            funcHandler={this._onChangeInputHandler}
                        />
                        <InputForm
                            name="password"
                            placeholder="Password"
                            password
                            funcHandler={this._onChangeInputHandler}
                        />
                        <ButtonForm funcHandler={this._onSubmitFormHandler}>
                            Đăng nhập
                    </ButtonForm>
                        <TextLink center 
                            funcHandler={this._onForgotPassword}
                            style={styles.textStyle}>
                            Quên mật khẩu?
                        </TextLink>
                        <View style={styles.textGroupStyle}>
                            <TextForm>Bạn chưa có tài khoản?</TextForm>
                            <TextLink
                                style={styles.textLinkStyle}
                                funcHandler={this._onGetCodeScreen}>
                                Đăng ký
                        </TextLink>
                        </View>
                    </View>
                </View>
            </BaseScreen>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 0
    },
    wapperStyle: {
        paddingHorizontal: 20
    },
    titleStyle: {
        textTransform: 'uppercase',
        marginBottom: '15%',
        color: COLOR_RED
    },
    textStyle: {
        marginTop: 10
    },
    textGroupStyle: {
        flexDirection: 'row',
        marginTop: '10%',
        justifyContent: 'center'
    },
    textLinkStyle: {
        color: COLOR_RED,
        textTransform: 'uppercase',
        fontWeight: '600',
        marginLeft: 10
    }
})
