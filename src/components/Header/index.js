import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon, Input } from 'react-native-elements';

// import { validateEmail } from '@constants/functions';
import { themes, colors } from '@constants/themes';
import images from '@constants/images';
import styles from '@constants/styles';
import strings from '@constants/strings';
// import API from '@services/API';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    onText(value) {
        this.props.onSearching(value);
    }

    render() {
        const { navigation, type, title, image, clear, search, onMenu, onSearch, onInfo, onClear, onSubmit } = this.props;
        return (
            <View style={style.main}>
                <View style={style.left}>
                    <TouchableOpacity style={style.left}
                        onPress={
                            type === 'back-info' || type === 'back-search' ? () => navigation.goBack() :
                            type === 'menu-search' ? onMenu : null
                        }
                    >
                        {
                            type === 'back-info' || type == 'back-search' ? <Icon type='material' name='arrow-back' size={30} color={colors.WHITE} /> :
                            type === 'menu-search' ? <Icon type='material-community' name='sort-variant' size={30} color={colors.WHITE} /> : <View />
                        }
                    </TouchableOpacity>
                </View>
                <View style={style.center}>
                    {
                        type === 'back-info' ?
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={style.avatar} source={image} />
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.WHITE }}>{title}</Text>
                            </View> :
                        type === 'back-search' ?
                            <View style={style.search}>                                
                                <Input
                                    placeholder={"Search by keyword or tag"}
                                    placeholderTextColor={colors.GRAY}
                                    keyboardType={'default'}
                                    secureTextEntry={false}
                                    blurOnSubmit={false}
                                    value={search}
                                    onChangeText={(text) => this.onText(text)}
                                    onSubmitEditing={onSubmit}
                                    inputContainerStyle={{height: 35, marginTop: 30, borderBottomWidth: 0}}
                                    inputStyle={{color: colors.WHITE}}
                                    />
                            </View> :
                        type === 'menu-search' ? <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.WHITE, textAlign: 'center' }}>{title}</Text> : <View />
                    }
                </View>
                <View style={style.right}>
                    <TouchableOpacity style={style.right}
                        onPress={
                            type == 'menu-search' ? onSearch :
                            type == 'back-search' && clear ? onClear :
                            type == 'back-info' ? onInfo : null
                        }
                    >
                        {
                            type === 'back-info' ?
                                <Icon type='material' name='info' size={30} color={colors.WHITE} /> :
                            type === 'back-search' && clear ?
                                <Icon type='material' name='clear' size={30} color={colors.WHITE} /> :
                            type === 'menu-search' ? <Icon type='material' name='search' size={30} color={colors.WHITE} /> : <View />
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 80,
        backgroundColor: '#000'
    },
    left: {
        justifyContent: 'center',
        width: 50,
        height: 60,
    },
    center: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        height: 60,
    },
    right: {
        justifyContent: 'center',
        width: 50,
        height: 60,
    },
    avatar: {
        marginLeft: 10, marginRight: 10,
        width: 35,
        height: 35,
        borderRadius: 25
    },
    search: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 35,
        backgroundColor: colors.DARK_GRAY,
        borderRadius: 5
    }
});