let db = {
    users: [
        {
            userId: 'dhjbwdf7gb34r7bwef87',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2019-03-15T10:59:52.7982',
            imageUrl: 'image/wyfybuaerbfluayerf/uEBWYFKUWGCBL',
            bio: 'Hello, my name is user. Nice to meet you',
            website: 'https://user.com',
            location: 'Kannur, Kerala'
        }
    ],
    screams: [
        {
            userHandle: "user",
            body: "This is a scream body",
            createdAt: "2020-05-20T19:25:34.397Z",
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'wifbluhsdcwefuhybwec',
            body: 'nice one mate!',
            createdAt: '2019-03-15T10:59:52.798Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'aefhblaudfhbakeufhg',
            type: 'like | comment',
            createdAt: '2020-03-15T10:59:52.798Z'
        }
    ]
};

const userDetails = {
    //Redux data
    credentials: {
        userId: 'uhwou2eedWEFKGV23F87GWUDFHB',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2019-03-15T10:59:52.798Z',
        imageUrl: 'image/dsuhydbckuwgeefkuwyburf',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'London, UK'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'bhsdbisdhcbiwb3i2bdsv'
        },
        {
            userHandle: 'user',
            screamId: 'iwbdiwefg6824rtg824fwe'
        }
    ]
};