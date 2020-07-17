import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import AppContainer from '@navigations';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Provider store={store} >
                    <PersistGate loading={null} persistor={persistor}>
                        <AppContainer />
                    </PersistGate>
                </Provider>
            </View>
        );
    }
}