import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseScreen } from '../base';
import { TitleForm, InputForm, ButtonForm } from '../../components/form';
import { ImageBackgroundTop } from '../../components/base';
import { COLOR_RED } from '../../constants/ColorConstants';
import { JOB_SCREEN } from '../../constants/NavigatorConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/SignUpActions';

class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: {}
        }
    }

    _onChangeInputHandler = (name, text) => {
        const { account } = this.state;
        this.setState({
            account: { ...account, [name]: text }
        })
    }

    _onSubmitFormHandler = () => {
        const { account } = this.state;
        const { info, _setInfoSignUp } = this.props;

        const obj = { 
            ...info, 
            email: account.email,
            password: account.password,
            fullname: account.fullname
        }
        _setInfoSignUp(obj);
        this.props.navigation.navigate(JOB_SCREEN);
    }

    render() {
        return (
            <BaseScreen style={styles.containerStyle}>
                <ImageBackgroundTop />
                <View style={styles.wapperStyle}>
                    <View>
                        <TitleForm center style={styles.titleStyle} >
                            Thông tin tài khoản
                        </TitleForm>
                        <InputForm
                            name="fullname"
                            placeholder="Fullname"
                            funcHandler={this._onChangeInputHandler}
                        />
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
                        <InputForm
                            name="confirm"
                            placeholder="Confirm"
                            password
                            funcHandler={this._onChangeInputHandler}
                        />
                        <ButtonForm funcHandler={this._onSubmitFormHandler}>
                            Tiếp tục
                        </ButtonForm>
                    </View>
                </View>
            </BaseScreen>
        )
    }
}

const mapState = (state) => {
    return { info: state.signUpReducer.info }
}

// Maps `dispatch` to `props`:
const mapDispatch = (dispatch) => {
    return {
        _setInfoSignUp: (info) => {
            dispatch(actions.setInfoSignUp(info));
        }
    }
}

export default connect(mapState, mapDispatch)(SignUpScreen);

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
    }
})
