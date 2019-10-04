import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { BaseScreen } from '../base';
import { NotifyItem } from '../../components/notification';
import { Header } from '../../components/base';

export default class NotifyScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            notifications: []
        }
    }

    componentDidMount = () => {
        this.setState({
            notifications: [
                {
                    "title": "Mobile App Development",
                    "content": "Though the above described method works fine for scenarios where the hour, minute or seconds is greater than 9 but fails for cases where it is less. For example, 03:05:01 will be displayed as 3:5:1 which is not the correct format. So how do you fix ?"
                },
                {
                    "title": "Mobile App Development",
                    "content": "Though the above described method works fine for scenarios where the hour, minute or seconds is greater than 9 but fails for cases where it is less. For example, 03:05:01 will be displayed as 3:5:1 which is not the correct format. So how do you fix ?"
                },
                {
                    "title": "Mobile App Development",
                    "content": "Though the above described method works fine for scenarios where the hour, minute or seconds is greater than 9 but fails for cases where it is less. For example, 03:05:01 will be displayed as 3:5:1 which is not the correct format. So how do you fix ?"
                },
                {
                    "title": "Mobile App Development",
                    "content": "Though the above described method works fine for scenarios where the hour, minute or seconds is greater than 9 but fails for cases where it is less. For example, 03:05:01 will be displayed as 3:5:1 which is not the correct format. So how do you fix ?"
                },
                {
                    "title": "Mobile App Development",
                    "content": "Though the above described method works fine for scenarios where the hour, minute or seconds is greater than 9 but fails for cases where it is less. For example, 03:05:01 will be displayed as 3:5:1 which is not the correct format. So how do you fix ?"
                },
                {
                    "title": "Mobile App Development",
                    "content": "Though the above described method works fine for scenarios where the hour, minute or seconds is greater than 9 but fails for cases where it is less. For example, 03:05:01 will be displayed as 3:5:1 which is not the correct format. So how do you fix ?"
                },
                {
                    "title": "Mobile App Development",
                    "content": "Though the above described method works fine for scenarios where the hour, minute or seconds is greater than 9 but fails for cases where it is less. For example, 03:05:01 will be displayed as 3:5:1 which is not the correct format. So how do you fix ?"
                }
            ]
        })
    }

    render() {
        const { navigation } = this.props;
        return (
            <BaseScreen nopadding>
                <Header
                    title="Thông báo"
                    navigation={navigation}
                />
                <View style={styles.wrapperStyle}>
                    <FlatList 
                        data={this.state.notifications}
                        renderItem={({ item, index }) => 
                            <NotifyItem 
                                notify={item}
                                index={index}
                            />
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </BaseScreen>
        )
    }
}

const styles = StyleSheet.create({
    wrapperStyle: {
        
    }
})
