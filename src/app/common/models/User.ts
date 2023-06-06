export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    friendsIds: number[];
    lastSeen: string;
}