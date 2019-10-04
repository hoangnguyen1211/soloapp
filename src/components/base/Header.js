import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TextForm, InputForm } from '../form';
import { HorizontalGradient } from '../gradient';
import { COLOR_WHITE, COLOR_SKY } from '../../constants/ColorConstants';
import { Icon } from 'react-native-elements';

export default Header = (props) => {

    const [searchToggle, setSearchToggle] = useState(false);
    const { funcGoBack, title, navigation } = props;

    const _leftComponent = () => {
        return <View style={[ 
                styles.leftComponentStyle
            ]}>
            <TouchableOpacity 
                style={{ display: funcGoBack ? 'flex' : 'none' }}
                onPress={() => funcGoBack()}>
                <Icon
                    type='font-awesome'
                    name='arrow-left'
                    color={COLOR_WHITE}
                    size={17}
                />
            </TouchableOpacity>
        </View>
    }

    const _centerComponent = () => {
        return <View style={styles.centerComponentStyle}>
            <TextForm style={styles.titleStyle}>
                {title ? title : ''}
            </TextForm>
        </View>
    }

    const _rightComponent = () => {
        return <View style={styles.rightComponentStyle}>
            <Text style={styles.badeStyle}>10</Text>
            <TouchableOpacity onPress={() => _onToggleSearchBar()}>
                <Icon
                    type='font-awesome'
                    name='search'
                    color={COLOR_WHITE}
                    size={17}
                    containerStyle={{ marginRight: 10 }}
                />
            </TouchableOpacity>
            <Icon
                type='ionicon'
                name='ios-notifications-outline'
                color={COLOR_WHITE}
                size={23}
                onPress={() => navigation.navigate('NotifyScreen')}
            />
        </View>
    }

    const _searchComponent = () => {
        return <HorizontalGradient style={styles.searchComponentStyle}>
            <View style={styles.searchWrapperStyle}>
                <Icon
                    type='font-awesome'
                    name='search'
                    color="#999"
                    size={17}
                    containerStyle={styles.searchIconStyle}
                />
                <InputForm
                    name="search"
                    placeholder="Search"
                    style={styles.searchInputStyle}
                />
            </View>
        </HorizontalGradient>
    }

    const _onToggleSearchBar = () => {
        setSearchToggle(toggle => !toggle);
    }

    return (
        <View>
            <HorizontalGradient style={styles.containerStyle}>
                <View style={styles.wrapperStyle}>
                    {_leftComponent()}
                    {_centerComponent()}
                    {_rightComponent()}
                </View>
            </HorizontalGradient>
            {searchToggle ? _searchComponent() : null}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingTop: 50,
        paddingHorizontal: 10,
        justifyContent: 'flex-end'
    },
    wrapperStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10
    },
    leftComponentStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    centerComponentStyle: {
        flex: 1
    },
    titleStyle: {
        textAlign: 'center',
        fontWeight: '600',
        color: COLOR_WHITE
    },
    rightComponentStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative'
    },
    badeStyle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        fontSize: 9,
        color: '#fff',
        fontWeight: '600',
        backgroundColor: COLOR_SKY,
        lineHeight: 15,
        textAlign: 'center',
        position: 'absolute',
        right: 5,
        top: -5,
        zIndex: 200
    },
    searchComponentStyle: {
        paddingHorizontal: 10
    },
    searchWrapperStyle: {
        position: 'relative'
    },
    searchIconStyle: {
        position: 'absolute',
        zIndex: 100,
        left: 15,
        top: '15%'
    },
    searchInputStyle: {
        paddingLeft: 35,
        height: 35
    }
})
