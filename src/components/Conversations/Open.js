import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Grid from 'react-native-infinite-scroll-grid';
import { Icon } from 'react-native-elements';

// import { validateEmail } from '@constants/functions';
import { themes, colors } from '@constants/themes';
import images from '@constants/images';
import styles from '@constants/styles';
import strings from '@constants/strings';
// import API from '@services/API';

export default class Open extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusIndex: 1,
            statusFlag: false,

            data: [],
            next: 1,
            isLoading: false,
            loadingMore: false,
            refreshing: false,
        }
    }

    componentDidMount() {
        this.loadData(true, 1);
    }

    onRefresh() {
        this.loadData(false, 1);
    }

    onEndReached() {
        this.loadData(false, this.state.next);
    }

    async fetchPosts(page, perPage) {
        // let perPage = 10;
        const posts = await fetch(`http://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${perPage}`)
            .then(response => response.json());
        return posts;
    }

    async loadData(refresh, next) {
        if (this.state.isLoading) return;

        if (refresh) {
            this.setState({ refresh: true });
        } else {
            this.setState({ isLoading: true });
        }

        try {
            this.setState({ i9sLoading: true });
            const data = await this.fetchPosts(this.state.next);
            this.setState(previousState => {
                return {
                    loadingMore: false,
                    data: refresh ? data : previousState.data.concat(data),
                    next: previousState.next + 1
                };
            });
        } catch (error) {
            console.error(error);
        } finally {
            this.setState({ isLoading: false, loadingMore: false, refreshing: false });
        }
    }

    onStatus(index) {
        this.setState({ statusIndex: index, statusFlag: false });
    }

    renderStatusBody() {
        return (
            <View style={style.statusBody}>
                <TouchableOpacity style={style.statusItem} onPress={() => this.onStatus(1)}>
                    <Text style={{ fontSize: 15 }}>{strings.oldest}</Text>
                    <Icon type='material-community' name='check' size={30} color={this.state.statusIndex == 1 ? colors.DEEP_YELLOW : colors.GRAY} />
                </TouchableOpacity>
                <TouchableOpacity style={style.statusItem} onPress={() => this.onStatus(2)}>
                    <Text style={{ fontSize: 15 }}>{strings.newest}</Text>
                    <Icon type='material-community' name='check' size={30} color={this.state.statusIndex == 2 ? colors.DEEP_YELLOW : colors.GRAY} />
                </TouchableOpacity>
                <TouchableOpacity style={style.statusItem} onPress={() => this.onStatus(3)}>
                    <Text style={{ fontSize: 15 }}>{strings.waiting_longest}</Text>
                    <Icon type='material-community' name='check' size={30} color={this.state.statusIndex == 3 ? colors.DEEP_YELLOW : colors.GRAY} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const { data } = this.state;
        const { itemCount, onItem } = this.props;
        return (
            <View style={style.tabBody}>
                <View style={style.statusBar}>
                    <Text style={{ marginLeft: 10 }}>{itemCount + ' ' + strings.open_conversations}</Text>
                    <TouchableOpacity style={style.statusButton} onPress={() => this.setState({ statusFlag: !this.state.statusFlag })}>
                        <Text>{this.state.statusIndex == 1 ? strings.oldest : this.state.statusIndex == 2 ? strings.newest : strings.waiting_longest}</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.statusFlag ? this.renderStatusBody() : null
                }
                <Grid
                    numColumns={1}
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={style.item} onPress={onItem}>
                                <Image source={{ uri: item.thumbnailUrl }} style={style.image} />
                                <View style={{ width: wp('60.0%'), height: '100%' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Sara Reyes'}</Text>
                                    <Text style={{ fontSize: 15, color: colors.DARK_GRAY }}>{item.title}</Text>
                                </View>
                                <Text style={{ fontSize: 15, color: colors.DARK_GRAY }}>{'18/03'}</Text>
                            </TouchableOpacity>
                        );
                    }}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.refreshing}
                    onEndReached={() => this.onEndReached()}
                    loadingMore={this.state.loadingMore}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    tabBody: {
        flex: 1,
        width: wp('100.0%'),
        height: '100%',
        backgroundColor: colors.WHITE
    },
    statusBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('100.0%'),
        height: 40,
        backgroundColor: '#E8E8E8'
    },
    statusButton: {
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: colors.BLACK,
        borderRadius: 5
    },
    statusBody: {
        position: 'absolute',
        top: 40,
        width: wp('100.0%'),
        backgroundColor: colors.WHITE,
        zIndex: 1000
    },
    statusItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        width: wp('100.0%'),
        height: 60,
        backgroundColor: colors.WHITE,
        borderBottomWidth: 1,
        borderColor: colors.GREY.whiteish
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 120,
        padding: 20,
        borderBottomWidth: 1,
        borderColor: colors.GREY.whiteish
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 25,
        aspectRatio: 1
    }
});