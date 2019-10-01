import React from 'react';
import { TouchableOpacity } from 'react-native';
import TextForm from './TextForm';

export default function TextLink(props) {
    const { style, center, funcHandler } = props;
    return (
        <TouchableOpacity onPress={ () => funcHandler() }>
            <TextForm center={ center } style={ style }>
                { props.children }
            </TextForm>
        </TouchableOpacity>
    )
}