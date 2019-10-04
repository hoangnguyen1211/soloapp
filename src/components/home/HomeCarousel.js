import React, { Component } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default class HomeCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {
                    id: "WpIAc9by5iU",
                    thumbnail: "https://i.imgur.com/7CBZZDP.png",
                    title: "Led Zeppelin - Stairway To Heaven"
                }, {
                    id: "sNPnbI1arSE",
                    thumbnail: "https://i.imgur.com/VsPmH1K.png",
                    title: "Eminem - My Name Is"
                }, {
                    id: "VOgFZfRVaww",
                    thumbnail: "https://i.imgur.com/DPpqufz.png",
                    title: ""
                }
            ]
        }
    }

    _renderItem({ item, index }, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                {/* <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                </Text> */}
            </View>
        );
    }

    render() {
        return (
            <Carousel 
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth}
                data={this.state.entries}
                renderItem={this._renderItem}
                hasParallaxImages={true}
                loop={true}
                autoplay={true}
            />
        );
    }
}

const styles = StyleSheet.create({
    item: {
        width: screenWidth,
        height: screenWidth / 1.5,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 })
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
    },
})
