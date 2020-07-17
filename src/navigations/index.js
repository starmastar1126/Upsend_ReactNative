import React, { Component } from 'react';
// import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from '@navigations/DrawerNavigator';

// import { connect } from 'react-redux';
// import { logged } from '@modules/account/actions';

import { Splash, Login, Message, Search } from '@screens';
import { navOptionHandler } from '@constants/functions';

const StackApp = createStackNavigator();
export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    // async componentDidMount() {
    //     if (await AsyncStorage.getItem('logged') === "true") {
    //         this.props.logged(true);
    //     } else {
    //         this.props.logged(false);
    //     }
    // }

    render() {
        return (
            <NavigationContainer>
                {/* <StackApp.Navigator initialRouteName={AsyncStorage.getItem('logged') === "true" ? "App" : "Splash"}> */}
                <StackApp.Navigator initialRouteName={"Splash"}>
                    <StackApp.Screen name="Splash" component={Splash} options={navOptionHandler} />
                    <StackApp.Screen name="Login" component={Login} options={navOptionHandler} />
                    <StackApp.Screen name="App" component={DrawerNavigator} options={navOptionHandler} />
                    <StackApp.Screen name="Message" component={Message} options={navOptionHandler} />
                    <StackApp.Screen name="Search" component={Search} options={navOptionHandler} />
                </StackApp.Navigator>
            </NavigationContainer>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         logged: state.account.logged
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         logged: (data) => {
//             dispatch(logged(data))
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);