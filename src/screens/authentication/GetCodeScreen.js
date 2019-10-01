import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TitleForm, TextForm, InputForm, ButtonForm, TextLink } from '../../components/form';
import { COLOR_RED } from '../../constants/ColorConstants';
import { FONT_XS } from '../../constants/FontConstants';
import { BaseScreen } from '../base';
import { SIGN_IN_SCREEN, CONFIRM_CODE_SCREEN, FORGOT_PASSWORD_SCREEN } from '../../constants/NavigatorConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/SignUpActions';

class GetCodeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            info: {}
        }
    }

    _onChangeInputHandler = (name, text) => {
        const { info } = this.state;
        this.setState({
            info: { ...info, phone: text }
        })
    }

    _onSubmitGetCodeHandler = () => {
        const { _setInfoSignUp, navigation } = this.props;
        const { info } = this.state;
        const forgotPass = navigation.getParam('forgotPass');

        if(!info.phone){
            Alert.alert('Vui lòng nhập số điện thoại!');
        }
        else if(forgotPass){
            this.props.navigation.navigate(FORGOT_PASSWORD_SCREEN);  
        }
        else {
            _setInfoSignUp(info);
            this.props.navigation.navigate(CONFIRM_CODE_SCREEN);
        }
    }

    _onBackSignInHandler = () => {
        this.props.navigation.navigate(SIGN_IN_SCREEN);
    }

    render() {
        const forgotPass = this.props.navigation.getParam('forgotPass');
        return (
            <BaseScreen style={styles.containerStyle} >
                <View>
                    <TitleForm center style={styles.titleStyle}>Mã xác nhận</TitleForm>
                    <InputForm
                        center
                        name="phone"
                        placeholder="Phone number"
                        funcHandler={this._onChangeInputHandler}
                    />
                    <TextForm center style={styles.noteStyle}>
                        Lưu ý: Vui lòng nhập đúng số điện thoại của bạn để nhận mã xác thực miễn phí. 
                    </TextForm>
                    <ButtonForm funcHandler={this._onSubmitGetCodeHandler}>
                        Lấy mã xác nhận
                    </ButtonForm>
                    <View style={styles.textGroupStyle}>
                        <TextForm>
                            { forgotPass ? 'Quay lại' : 'Bạn đã có tài khoản?' }
                        </TextForm>
                        <TextLink
                            style={styles.textLinkStyle}
                            funcHandler={this._onBackSignInHandler}>
                            Đăng nhập
                    </TextLink>
                    </View>
                </View>
            </BaseScreen>
        )
    }
}

// Maps `dispatch` to `props`:
const mapDispatch = (dispatch) => {
    return {
        _setInfoSignUp: (info) => {
            dispatch(actions.setInfoSignUp(info));
        }
    }
}

export default connect(null, mapDispatch)(GetCodeScreen);

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
    },
    noteStyle: {
        fontSize: FONT_XS,
        paddingHorizontal: '10%',
        marginBottom: 20
    }
})
