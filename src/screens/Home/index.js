import React, { Component } from 'react';
import {
    StyleSheet,
    StatusBar,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Header, Open, Snoozed, Closed, Mentions, LeftMenuBar } from '@components';
// import { validateEmail } from '@constants/functions';
import { themes, colors } from '@constants/themes';
import images from '@constants/images';
import styles from '@constants/styles';
import strings from '@constants/strings';
import API from '@services/API';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_button: false,
            loading: false,
            menuIndex: 1,
            tabIndex: 1,
            headerTitle: strings.me
        }
    }

    onSelect(index, title) {
        this.setState({menuIndex: index, menu_button: false, headerTitle: title});

    }

    renderTabHeader() {
        return (
            <View style={style.tabHeader}>
                <TouchableOpacity style={[style.tabButton, { backgroundColor: this.state.tabIndex == 1 ? colors.DEEP_YELLOW : colors.BLACK }]} onPress={() => this.setState({ tabIndex: 1 })}>
                    <Text style={[style.tabFont, { color: this.state.tabIndex == 1 ? colors.BLACK : colors.WHITE }]}>{strings.open}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.tabButton, { backgroundColor: this.state.tabIndex == 2 ? colors.DEEP_YELLOW : colors.BLACK }]} onPress={() => this.setState({ tabIndex: 2 })}>
                    <Text style={[style.tabFont, { color: this.state.tabIndex == 2 ? colors.BLACK : colors.WHITE }]}>{strings.snoozed}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.tabButton, { backgroundColor: this.state.tabIndex == 3 ? colors.DEEP_YELLOW : colors.BLACK }]} onPress={() => this.setState({ tabIndex: 3 })}>
                    <Text style={[style.tabFont, { color: this.state.tabIndex == 3 ? colors.BLACK : colors.WHITE }]}>{strings.closed}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} translucent backgroundColor="transparent" />
                <SafeAreaView style={styles.container}>
                    <Header
                        type={this.state.menuIndex == 2 ? "menu" : "menu-search"}
                        title={this.state.headerTitle}
                        navigation={this.props.navigation}
                        onMenu={() => this.setState({ menu_button: !this.state.menu_button })}
                        onSearch={() => this.props.navigation.navigate('Search')}
                    />
                    <View style={style.main}>
                        {this.state.menuIndex == 2 ? null : this.renderTabHeader()}
                        {this.state.menuIndex == 2 ? <Mentions /> :
                            this.state.tabIndex == 1 ?
                                <Open
                                    itemCount={5}
                                    onItem={() => this.props.navigation.navigate('Message')}
                                /> :
                                this.state.tabIndex == 2 ?
                                    <Snoozed /> : <Closed />
                        }
                        <LeftMenuBar
                            show={this.state.menu_button}
                            onPress={() => this.setState({ menu_button: !this.state.menu_button })}
                            onSelect={(index, title) => this.onSelect(index, title)}
                        />
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    main: {
        flex: 1
    },
    tabHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('100.0%'),
        height: 50
    },
    tabButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('100.0%') / 3,
        height: '100%',
        backgroundColor: colors.BLACK
    },
    tabFont: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});