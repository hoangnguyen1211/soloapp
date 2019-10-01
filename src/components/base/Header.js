import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TextForm, InputForm } from '../form';
import { HorizontalGradient } from '../gradient';
import { COLOR_WHITE } from '../../constants/ColorConstants';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');
export default Header = (props) => {

    const [searchToggle, setSearchToggle] = useState(false);

    const { funcGoBack, title } = props;

    const _leftComponent = () => {
        if(!funcGoBack) return <View style={styles.leftComponentStyle}></View>
        return <View>
            <TouchableOpacity onPress={() => funcGoBack()}>
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
            <TouchableOpacity onPress={() => _onToggleSearchBar()}>
                <Icon
                    type='font-awesome'
                    name='search'
                    color={COLOR_WHITE}
                    size={17}
                    containerStyle={{ marginRight: 15 }}
                />
            </TouchableOpacity>
            <Icon
                type='font-awesome'
                name='bell'
                color={COLOR_WHITE}
                size={17}
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
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    wrapperStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10
    },
    rightComponentStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchComponentStyle: {
        paddingHorizontal: 20
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
    },
    titleStyle: {
        fontWeight: '600',
        color: COLOR_WHITE
    }
})
