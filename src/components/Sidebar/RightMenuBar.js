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

export default class RightMenuBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { show, onPress } = this.props;
        return (
            show == true ?
                <View style={style.container}>
                    <TouchableOpacity style={style.container} onPress={onPress} />
                    <View style={style.main}>
                        <View style={[style.item, { paddingLeft: 25, }]}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.DARK_GRAY }}>{strings.actions}</Text>
                        </View>
                        <TouchableOpacity style={style.item} onPress={() => alert(strings.close_conversation)}>
                            <Icon type='material-community' name='check' size={20} color={colors.BLACK} />
                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{strings.close_conversation}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => alert(strings.snooze_conversation)}>
                            <Icon type='antdesign' name='clockcircleo' size={20} color={colors.BLACK} />
                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{strings.snooze_conversation}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => alert(strings.assign_conversation)}>
                            <Icon type='material' name='panorama-wide-angle' size={20} color={colors.BLACK} />
                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{strings.assign_conversation}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => alert(strings.mark_as_priority)}>
                            <Icon type='feather' name='bookmark' size={20} color={colors.BLACK} />
                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{strings.mark_as_priority}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => alert(strings.share_conversation)}>
                            <Icon type='simple-line-icon' name='share' size={20} color={colors.BLACK} />
                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{strings.share_conversation}</Text>
                        </TouchableOpacity>

                        <View style={[style.item, { paddingLeft: 25, }]}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.DARK_GRAY }}>{strings.customers}</Text>
                        </View>
                        <View style={[style.item, { paddingLeft: 25, }]}>
                            <TouchableOpacity style={style.button} onPress={() => alert(strings.add_customer)}>
                                <Icon type='fontisto' name='plus-a' size={20} color={colors.BLACK} />
                                <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{strings.add_customer}</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity style={[style.item, { borderBottomWidth: 0 }]} onPress={() => alert('Beverly Carpenter')}>
                            <Image style={style.avatar} source={images.img_splash} />
                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: colors.BLACK }}>{'Beverly Carpenter'}</Text>
                        </TouchableOpacity>
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
        top: 0, right: 0,
        width: wp('70.0%'),
        height: hp('100.0%') - 81,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOpacity: 0.8,
        shadowOffset: { height: 1, width: 1 },
        shadowRadius: 2,
        elevation: 5,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
        borderWidth: 1,
        borderColor: colors.BLACK,
        shadowColor: colors.BLACK,
        shadowOpacity: 0.8,
        shadowOffset: { height: 1, width: 1 },
        shadowRadius: 2,
        elevation: 5,
    }
});