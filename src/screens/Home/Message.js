import React, { Component } from 'react';
import {
    StyleSheet,
    StatusBar,
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GiftedChat, Actions, Bubble, Send, Time, InputToolbar } from 'react-native-gifted-chat';
import { Icon } from 'react-native-elements';

import { Header, CustomActions, CustomView, RightMenuBar } from '@components';
// import { validateEmail } from '@constants/functions';
import { themes, colors } from '@constants/themes';
import images from '@constants/images';
import styles from '@constants/styles';
import strings from '@constants/strings';
import API from '@services/API';
import dummy from '@constants/dummy';

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info_menu_button: false,
            loading: false,
            messages: [],
            loadEarlier: true,
            typingText: null,
            isLoadingEarlier: false,
        }

        this._isMounted = false;
        this.onSend = this.onSend.bind(this);
        this.onReceive = this.onReceive.bind(this);
        this.onLoadEarlier = this.onLoadEarlier.bind(this);
        this.renderCustomActions = this.renderCustomActions.bind(this);
        this.renderBubble = this.renderBubble.bind(this);
        this.renderTime = this.renderTime.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.renderSend = this.renderSend.bind(this);
        this.renderInputToolbar = this.renderInputToolbar.bind(this);

        this._isAlright = null;
    }

    componentWillMount() {
        this._isMounted = true;
        this.setState({ messages: dummy.messages });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    onLoadEarlier() {
        this.setState({ isLoadingEarlier: true });

        setTimeout(() => {
            if (this._isMounted === true) {
                this.setState((previousState) => {
                    return {
                        messages: GiftedChat.prepend(previousState.messages, dummy.old_messages),
                        loadEarlier: true,
                        isLoadingEarlier: false,
                    };
                });
            }
        }, 1000);
    }

    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
        // for demo purpose
        this.answerDemo(messages);
    }

    answerDemo(messages) {
        if (messages.length > 0) {
            if ((messages[0].image || messages[0].location) || !this._isAlright) {
                this.setState({ typingText: 'React Native is typing' });
            }
        }

        setTimeout(() => {
            if (this._isMounted === true) {
                if (messages.length > 0) {
                    if (messages[0].image) {
                        this.onReceive('Nice picture!');
                    } else if (messages[0].location) {
                        this.onReceive('My favorite place');
                    } else {
                        if (!this._isAlright) {
                            this._isAlright = true;
                            this.onReceive('Alright');
                        }
                    }
                }
            }

            this.setState({ typingText: null });
        }, 1000);
    }

    onReceive(text) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text: text,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                }),
            };
        });
    }

    renderCustomActions(props) {
        if (Platform.OS === 'ios') {
            return (
                <CustomActions
                    {...props}
                />
            );
        }
        const options = {
            'Action 1': (props) => {
                alert('option 1');
            },
            'Action 2': (props) => {
                alert('option 2');
            },
            'Cancel': () => { },
        };
        return (
            <Actions
                {...props}
                options={options}
            />
        );
    }

    renderBubble(props) {
        return (
            <Bubble {...props}
                wrapperStyle={{
                    left: { backgroundColor: colors.LIGHT_PINK },
                    right: { backgroundColor: colors.LIGHT_BLUE }
                }}
                textStyle={{
                    left: { color: colors.BLACK },
                    right: { color: colors.BLACK }
                }}

            />
        );
    }

    renderTime(props) {
        return (
            <Time {...props}
                textStyle={{
                    left: { color: colors.BLACK },
                    right: { color: colors.BLACK }
                }}
            />
        )
    }

    renderCustomView(props) {
        return (
            <CustomView
                {...props}
            />
        );
    }

    renderFooter(props) {
        if (this.state.typingText) {
            return (
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>
                        {this.state.typingText}
                    </Text>
                </View>
            );
        }
        return null;
    }

    renderSend(props) {
        return (
            <Send {...props}>
                <View style={style.sendButton} >
                    <Icon type='material' name='send' size={25} color={colors.BLACK} />
                </View>
            </Send>
        )
    }

    renderInputToolbar(props) {
        return (
            <InputToolbar
                {...props}
                containerStyle={{
                    // backgroundColor: colors.BLACK,
                    // borderTopColor: "#E8E8E8",
                    // borderTopWidth: 1,
                    // padding: 8
                }}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} translucent backgroundColor="transparent" />
                <SafeAreaView style={styles.container}>
                    <Header type="back-info" title={'Beverly Carpenter'} image={images.img_splash} navigation={this.props.navigation} onInfo={()=> this.setState({info_menu_button: !this.state.info_menu_button})} />
                    <View style={style.main}>
                        <GiftedChat
                            user={{
                                _id: 1,
                                avatar: 'https://placeimg.com/140/140/any',
                            }}

                            messages={this.state.messages}
                            placeholder={strings.reply_to_taryn}

                            loadEarlier={this.state.loadEarlier}
                            isLoadingEarlier={this.state.isLoadingEarlier}
                            onLoadEarlier={this.onLoadEarlier}

                            showUserAvatar
                            onPressAvatar={() => alert("press avatar")}
                            onLongPressAvatar={() => alert("long press avatar")}
                            renderAvatarOnTop={false}

                            alwaysShowSend
                            onSend={this.onSend}
                            renderSend={this.renderSend}

                            // inverted={true}
                            // renderUsernameOnMessage={true}
                            // isCustomViewBottom={true}

                            renderActions={this.renderCustomActions}
                            renderBubble={this.renderBubble}
                            renderTime={this.renderTime}
                            renderCustomView={this.renderCustomView}
                            renderFooter={this.renderFooter}
                            renderInputToolbar={this.renderInputToolbar}
                        />
                        <RightMenuBar show={this.state.info_menu_button} onPress={() => this.setState({info_menu_button: !this.state.info_menu_button})}/>
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
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginBottom: 3,
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: colors.DEEP_YELLOW
    },
    footerContainer: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#aaa',
    },
});