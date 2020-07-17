import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, Image, AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { connect } from 'react-redux';
import { logged } from '@modules/account/actions';

// import { Header } from '@components';
// import { validateEmail } from '@constants/functions';
import { themes, colors } from '@constants/themes';
import images from '@constants/images';
import styles from '@constants/styles';
import strings from '@constants/strings';
// import API from '@services/API';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        setTimeout(() => {
            if (AsyncStorage.getItem('logged') === "true") {
                this.props.logged(true);
                this.props.setUser(AsyncStorage.getItem('user'));
                this.props.navigation.navigate('Login');
            } else {
                this.props.logged(false);
                this.props.navigation.navigate('App');
            }
        }, 5000);
    }

    render() {
        return (
            <View style={style.container}>
                <StatusBar hidden />
                <Image
                    source={images.img_logo}
                    style={style.logo}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 150
    }
});

const mapStateToProps = state => {
    return {
        logged: state.account.logged
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logged: (data) => {
            dispatch(logged(data))
        },
        setUser: (data) => {
            dispatch(setUser(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Splash);