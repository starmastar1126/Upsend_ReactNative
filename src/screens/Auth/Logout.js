import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import { Header } from '@components';
// import { validateEmail } from '@constants/functions';
import { themes, colors } from '@constants/themes';
import images from '@constants/images';
import styles from '@constants/styles';
import strings from '@constants/strings';
import API from '@services/API';

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                
            </View>
        )
    }
}

const style = StyleSheet.create({
    background: {
        flex: 1
    }
});