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

// import { validateEmail } from '@constants/functions';
import { themes, colors } from '@constants/themes';
import images from '@constants/images';
import styles from '@constants/styles';
import strings from '@constants/strings';
// import API from '@services/API';

export default class Snoozed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 1,
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

    renderStatusBody() {
        return (
            <View style={{ position: 'absolute', top: 40, width: wp('100.0%'), height: 250, backgroundColor: colors.BLACK, zIndex: 1000 }}></View>
        )
    }
    render() {
        const { data } = this.state;
        return (
            <View style={style.tabBody}>
                <View style={style.statusBar}>
                    <Text style={{ marginLeft: 10 }}>{'5' + ' ' + strings.open_conversations}</Text>
                    <TouchableOpacity style={style.statusButton} onPress={() => this.setState({ statusFlag: !this.state.statusFlag })}>
                        <Text>{this.state.status == 1 ? strings.oldest : this.state.status == 2 ? strings.newest : strings.waiting_longest}</Text>
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
                            <View
                                style={{
                                    flexDirection: "row",
                                    height: 70,
                                    padding: 4
                                }}
                            >
                                <Image
                                    source={{ uri: item.thumbnailUrl }}
                                    style={{ aspectRatio: 1, borderRadius: 8 }}
                                />
                                <Text style={{ flex: 1, marginLeft: 4 }}>{item.title}</Text>
                            </View>
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
    }
});