import types from './types';

export const logged = (data) => ({
    type: types.LOGGED,
    payload: data,
});

export const setUser = (data) => ({
    type: types.SET_USER,
    payload: data,
});