import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TitleForm, TextForm, InputForm, ButtonForm, TextLink } from '../../components/form';
import { COLOR_RED } from '../../constants/ColorConstants';
import { BaseScreen } from '../base';
import { SIGN_UP_SCREEN } from '../../constants/NavigatorConstants';

export default class ConfirmScreen extends Component {

    _onChangeInputHandler = (name, text) => {

    }

    _onSubmitConfirmHandler = () => {
        this.props.navigation.navigate(SIGN_UP_SCREEN);
    }

    _onSendAgainHandler = () => {
        
    }

    render() {
        return (
            <BaseScreen style={styles.containerStyle} >
                <View>
                    <TitleForm center style={styles.titleStyle} >Xác nhận</TitleForm>
                    <InputForm
                        center
                        name="code"
                        placeholder="Code"
                        funcHandler={this._onChangeInputHandler}
                    />
                    <ButtonForm funcHandler={this._onSubmitConfirmHandler}>
                        Xác nhận
                    </ButtonForm>
                    <View style={styles.textGroupStyle}>
                        <TextForm>Bạn chưa nhận được mã?</TextForm>
                        <TextLink
                            style={styles.textLinkStyle}
                            funcHandler={this._onSendAgainHandler}>
                            Gửi lại
                    </TextLink>
                    </View>
                </View>
            </BaseScreen>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    titleStyle: {
        textTransform: 'uppercase',
        color: COLOR_RED
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
