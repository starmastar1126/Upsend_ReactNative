import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';

// import { validateEmail } from '@constants/functions';
import { themes, colors } from '@constants/themes';
import images from '@constants/images';
import styles from '@constants/styles';
import strings from '@constants/strings';
// import API from '@services/API';

export default class LeftMenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemIndex: 1,
        }
    }

    onItem(index, title) {
        this.setState({ itemIndex: index });
        if(title != null) {
            this.props.onSelect(index, title);
        }
    }

    render() {
        const { show, onPress } = this.props;
        return (
            show == true ?
                <View style={style.container}>
                    <TouchableOpacity style={style.container} onPress={onPress} />
                    <View style={style.main}>
                        <TouchableOpacity style={[style.item, { borderTopRightRadius: 15, backgroundColor: this.state.itemIndex == 1 ? colors.DEEP_YELLOW : colors.WHITE }]}
                            onPress={() => this.onItem(1, strings.me)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={style.avatar} source={images.img_splash} />
                                <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{strings.me}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 50 }}>
                                <Text>{6}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.item, { backgroundColor: this.state.itemIndex == 2 ? colors.DEEP_YELLOW : colors.WHITE }]}
                            onPress={() => this.onItem(2, strings.mentions)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon type='entypo' name='email' size={20} color={colors.BLACK} />
                                <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{strings.mentions}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 50 }}>
                                <Text>{118}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.item, { backgroundColor: this.state.itemIndex == 3 ? colors.DEEP_YELLOW : colors.WHITE }]}
                            onPress={() => this.onItem(3, strings.unassigned)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon type='material' name='assignment-late' size={20} color={colors.BLACK} />
                                <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{strings.unassigned}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 50 }}>
                                <Text>{3}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.item, { backgroundColor: this.state.itemIndex == 4 ? colors.DEEP_YELLOW : colors.WHITE }]}
                            onPress={() => this.onItem(4, strings.all)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon type='material' name='assignment-late' size={20} color={colors.BLACK} />
                                <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{strings.all}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>{318}</Text>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 60 }}
                                    onPress={() => this.onItem(6, null)} >
                                    <Icon type='ionicon' name={this.state.allStatus ? 'md-arrow-dropup' : 'md-arrow-dropdown'} size={25} color={colors.BLACK} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        {
                            this.state.itemIndex == 6 ?
                                <View>
                                    <TouchableOpacity style={[style.item, { backgroundColor: '#FAF6F1' }]}
                                        onPress={() => this.onItem(0, 'Brian')}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image style={style.avatar} source={images.img_splash} />
                                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{'Brian'}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 50 }}>
                                            <Text>{6}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[style.item, { backgroundColor: '#FAF6F1' }]}
                                        onPress={() => this.onItem(0, 'Charmaine')}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image style={style.avatar} source={images.img_splash} />
                                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{'Charmaine'}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 50 }}>
                                            <Text>{309}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View> : null
                        }
                        <View style={[style.item, { paddingLeft: 25, }]}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.DARK_GRAY }}>{strings.customers}</Text>
                        </View>
                        <TouchableOpacity style={[style.item, { backgroundColor: this.state.itemIndex == 5 ? colors.DEEP_YELLOW : colors.WHITE }]}
                            onPress={() => this.onItem(5, strings.bounceless)}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon type='material' name='assignment-late' size={20} color={colors.BLACK} />
                                <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{strings.bounceless}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>{0}</Text>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 60 }}
                                    onPress={() => this.onItem(7, null)} >
                                    <Icon type='ionicon' name={this.state.bouncelessStatus ? 'md-arrow-dropup' : 'md-arrow-dropdown'} size={25} color={colors.BLACK} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        {
                            this.state.itemIndex == 7 ?
                                <View>
                                    <TouchableOpacity style={[style.item, { backgroundColor: '#FAF6F1' }]}
                                        onPress={() => this.onItem(0, 'Brian')}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image style={style.avatar} source={images.img_splash} />
                                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{'Brian'}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                                            <Text>{6}</Text>
                                            <View style={{ width: 20 }} />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[style.item, { backgroundColor: '#FAF6F1' }]}
                                        onPress={() => this.onItem(0, 'Charmaine')}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image style={style.avatar} source={images.img_splash} />
                                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{'Charmaine'}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                                            <Text>{309}</Text>
                                            <View style={{ width: 20 }} />
                                        </View>
                                    </TouchableOpacity>
                                </View> : null
                        }
                    </View>
                </View>
                : <View />
        )
    }
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        width: wp('100.0'),
        height: hp('100.0%'),
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    main: {
        position: 'absolute',
        top: 0, left: 0,
        width: wp('90.0%'),
        height: hp('100.0%') - 131,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOpacity: 0.8,
        shadowOffset: { height: 1, width: 1 },
        shadowRadius: 2,
        elevation: 5,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 60,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderColor: colors.GRAY
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 180,
        height: 40,
        paddingLeft: 20,
        borderRadius: 10,
        backgroundColor: colors.DEEP_YELLOW,
        shadowColor: colors.BLACK,
        shadowOpacity: 0.8,
        shadowOffset: { height: 1, width: 1 },
        shadowRadius: 2,
        elevation: 5,
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 25,
        // borderWidth: 1,
        borderColor: colors.BLACK,
        shadowColor: colors.BLACK,
        shadowOpacity: 0.8,
        shadowOffset: { height: 1, width: 1 },
        shadowRadius: 2,
        elevation: 5,
    }
});