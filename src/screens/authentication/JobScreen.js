import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextForm, ButtonForm, RadioForm } from '../../components/form';
import { BaseScreen } from '../base';
import { EXPERIENCE_SCREEN } from '../../constants/NavigatorConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/SignUpActions';

class JobScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            job: {},
            jobs: []
        }
    }

    componentDidMount = () => {
        this.setState({
            jobs: [
                { id: 'sv', name: 'Sinh viên' },
                { id: 'tn', name: 'Trái ngành' },
                { id: 'it', name: 'IT' }
            ]
        })
    }

    _onChangeRadioHandler = (array, job) => {
        this.setState({
            jobs: array,
            job: job
        })
    }

    _onSubmitConfirmHandler = () => {
        const { job } = this.state;
        if (!job.name)
            Alert.alert('Vui lòng chọn công việc hiện tại của bạn!');
        else {
            const { info, _setInfoSignUp } = this.props;

            const obj = {
                ...info,
                job: job.name
            }
            _setInfoSignUp(obj);
            this.props.navigation.navigate(EXPERIENCE_SCREEN, { jobId: job.id });
        }
    }

    render() {
        const { jobs } = this.state;
        return (
            <BaseScreen style={styles.containerStyle} >
                <View>
                    <TextForm center style={styles.titleStyle} >
                        Công việc hiện tại của bạn là gì?
                    </TextForm>
                    <RadioForm containerStyle={styles.radioStyle}
                        items={jobs}
                        funcHandler={this._onChangeRadioHandler}
                    />
                    <ButtonForm funcHandler={this._onSubmitConfirmHandler}>
                        Tiếp tục
                    </ButtonForm>
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

export default connect(mapState, mapDispatch)(JobScreen);

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: '15%'
    },
    titleStyle: {
        fontWeight: '600',
        marginBottom: 30
    },
    radioStyle: {
        marginBottom: 15
    }
})
