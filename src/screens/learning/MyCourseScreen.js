import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BaseScreen } from '../base';

export default class MyCourseScreen extends Component {
    render() {
        return (
            <BaseScreen>
                <View style={ styles.wrapper }>
                    <Text>MY COURSE</Text>
                </View>
            </BaseScreen>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'stretch'
    }
})
