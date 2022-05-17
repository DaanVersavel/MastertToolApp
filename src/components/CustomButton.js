import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label, onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: '#54BCEB',
                padding: 20,
                borderRadius: 10,
                marginTop:10,
                marginBottom: 30,
            }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#fff',
                }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}