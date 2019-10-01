import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TextForm from './TextForm';
import { COLOR_ORANGE } from '../../constants/ColorConstants';

export default class RadioForm extends Component {
    constructor(props) {
        super(props);
    }

    _onCheckedHandler = (item, index) => {
        const { items, funcHandler } = this.props;

        const array = items.map((item, i) => {
            if (i === index) return { ...item, checked: true }
            return { ...item, checked: false }
        });

        funcHandler(array, item);
    }

    _renderRadioItem = () => {
        const { items, style } = this.props;
        return items.map((item, index) => {
            return <TouchableOpacity onPress={ () => this._onCheckedHandler(item, index) } key={index}>
                <View style={[styles.radioItemStyle, style]}>
                    <View style={[styles.circleOutnerStyle, { borderColor: item.checked ? COLOR_ORANGE : '#dadada' }]}>
                        <View style={[styles.circleInnerStyle, { display: item.checked ? 'flex' : 'none' }]}></View>
                    </View>
                    <TextForm>{item.name}</TextForm>
                </View>
            </TouchableOpacity>
        })
    }

    render() {
        const { containerStyle } = this.props;
        return (
            <View style={[containerStyle]}>
                {this._renderRadioItem()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    radioItemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        marginBottom: 10
    },
    circleOutnerStyle: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#dadada',
        padding: 4,
        borderRadius: 10,
        marginRight: 10
    },
    circleInnerStyle: {
        backgroundColor: COLOR_ORANGE,
        width: '100%',
        height: '100%',
        borderRadius: 5
    }
})