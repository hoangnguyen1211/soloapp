import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseScreen } from '../base';
import { TitleForm, InputForm, ButtonForm } from '../../components/form';
import { ImageBackgroundTop } from '../../components/base';
import { COLOR_RED } from '../../constants/ColorConstants';
import { JOB_SCREEN } from '../../constants/NavigatorConstants';

export default class ForgotPasswordScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: {}
        }
    }

    _onChangeInputHandler = (name, text) => {
        const { info } = this.state;
        this.setState({
            info: { ...info, [name]: text }
        })
    }

    _onSubmitFormHandler = () => {
        const { info } = this.state;
        this.props.navigation.navigate(JOB_SCREEN);
    }

    render() {
        return (
            <BaseScreen style={styles.containerStyle}>
                <ImageBackgroundTop />
                <View style={styles.wapperStyle}>
                    <View>
                        <TitleForm center style={styles.titleStyle} >
                            Đổi mật khẩu
                        </TitleForm>
                        <InputForm
                            name="code"
                            placeholder="Code"
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
                            Thực hiện
                        </ButtonForm>
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
    }
})
