import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TextForm, TitleForm } from '../../components/form';
import { VerticalGradient } from '../../components/gradient';
import { LANGUAGE_SCREEN } from '../../constants/NavigatorConstants';
import { COLOR_WHITE } from '../../constants/ColorConstants';

export default class SplashScreen extends Component {
    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                1500
            )
        )
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate(LANGUAGE_SCREEN);
        }
    }

    render() {
        return (
            <VerticalGradient style={ styles.containerStyle }>
                <TitleForm style={ styles.titleStyle }>SOLODEV APP</TitleForm>
                <TextForm style={ styles.textStyle }>Elearning for all</TextForm>
            </VerticalGradient>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 30,
        marginBottom: 20,
        color: COLOR_WHITE
    },
    textStyle: {
        color: COLOR_WHITE
    }
})
