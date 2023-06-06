import { User } from "../../models/User";

export const USERS: User[] = [
    {
        id: 1,
        name: 'Andrey',
        email: 'kazubovich@gmail.com',
        password: '1111',
        friendsIds: [2, 3, 4],
        lastSeen: '15:23',
    },
    {
        id: 2,
        name: 'Ivan',
        email: 'ivan@gmail.com',
        password: '1111',
        friendsIds: [1, 3],
        lastSeen: '10:37',
    },
    {
        id: 3,
        name: 'Alex',
        email: 'alex@gmail.com',
        password: '1111',
        friendsIds: [1, 2, 4],
        lastSeen: '9:50',
    },
    {
        id: 4,
        name: 'Leon',
        email: 'leon@gmail.com',
        password: '1111',
        friendsIds: [1, 3],
        lastSeen: '04:11',
    }
];