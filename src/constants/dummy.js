const old_messages = [
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'It uses the same design as React, letting you compose a rich mobile UI from declarative components https://facebook.github.io/react-native/',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 1,
            name: 'Developer',
        },
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'React Native lets you build mobile apps using only JavaScript',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 1,
            name: 'Developer',
        },
    },
];

const messages = [
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
        // location:{
        //     latitude: 48.86401,
        //     longitude: 2.398704
        // }
    },
    {
        _id: 2,
        text: 'My message https://solgirl.com',
        createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
        image: 'https://i.pinimg.com/236x/1c/11/0c/1c110c83c0e680ca9eef7b27691421cd--images-of-love-love-pictures.jpg',
        // You can also add a video prop:
        video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        // Any additional custom parameters are passed through
    },
    {
        _id: 3,
        text: 'This is a system message',
        createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
        system: true,
        // Any additional custom parameters are passed through
    },
    {
        _id: 4,
        text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
        createdAt: new Date(),
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: '😋 Yes',
                    value: 'yes',
                },
                {
                    title: '📷 Yes, let me show you with a picture!',
                    value: 'yes_picture',
                },
                {
                    title: '😞 Nope. What?',
                    value: 'no',
                },
            ],
        },
        user: {
            _id: 1,
            name: 'React Native',
        },
    },
    {
        _id: 5,
        text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
        createdAt: new Date(),
        quickReplies: {
            type: 'checkbox', // or 'radio',
            values: [
                {
                    title: 'Yes',
                    value: 'yes',
                },
                {
                    title: 'Yes, let me show you with a picture!',
                    value: 'yes_picture',
                },
                {
                    title: 'Nope. What?',
                    value: 'no',
                },
            ],
        },
        user: {
            _id: 2,
            name: 'React Native',
        },
    }
]

export default {
    messages,
    old_messages
};