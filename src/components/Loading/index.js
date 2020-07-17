import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import { validateEmail } from '@constants/functions';
import { themes, colors } from '@constants/themes';
import images from '@constants/images';
import styles from '@constants/styles';
import strings from '@constants/strings';
// import API from '@services/API';

export default class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props
        return (
            <View style={styles.container}>
                
            </View>
        )
    }
}

const style = StyleSheet.create({
    background: {
        flex: 1
    }
});