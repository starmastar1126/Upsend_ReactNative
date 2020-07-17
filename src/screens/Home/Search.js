import React, { Component } from 'react';
import {
    StyleSheet,
    StatusBar,
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';

import { Header } from '@components';
// import { validateEmail } from '@constants/functions';
import { themes, colors } from '@constants/themes';
import images from '@constants/images';
import styles from '@constants/styles';
import strings from '@constants/strings';
import API from '@services/API';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} translucent backgroundColor="transparent" />
                <SafeAreaView style={styles.container}>
                    <Header
                        type="back-search"
                        search={this.state.search}
                        clear={this.state.search === '' ? false : true}
                        navigation={this.props.navigation}
                        onClear={() => this.setState({ search: '' })}
                        onSearching={(search) => this.setState({ search: search })}
                        onSubmit={() => alert(this.state.search)}
                    />
                    <View style={style.main}>
                        {
                            this.state.search === '' ?
                                <View style={{ paddingLeft: 20 }}>
                                    <Text style={{ fontWeight: 'bold', color: colors.DARK_GRAY, marginTop: 20 }}>{strings.conversation_tags}</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>{'\"'}{'email'}{'\"'}</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>{'\"'}{'file'}{'\"'}</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>{'\"'}{'phone'}{'\"'}</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>{'\"'}{'address'}{'\"'}</Text>
                                </View> :
                                <View style={{ paddingLeft: 20 }}>
                                    <View style={style.keyword}>
                                        <Icon type='material' name='search' size={30} color={colors.DEEP_YELLOW} />
                                        <Text>{strings.search_by_keyword}{' \"'}</Text>
                                        <Text style={{ fontWeight: 'bold' }}>{this.state.search}</Text>
                                        <Text>{'\" '}</Text>
                                    </View>
                                    <Text style={{ color: colors.DARK_GRAY }}>{strings.conversation_tags}</Text>
                                </View>
                        }
                    </View>
                </SafeAreaView>
            </View >
        )
    }
}

const style = StyleSheet.create({
    main: {
        flex: 1
    },
    keyword: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('100.0%'),
        height: 50,
        // borderBottomWidth: 1
    }
});