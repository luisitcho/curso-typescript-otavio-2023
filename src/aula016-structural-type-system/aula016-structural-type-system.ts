// Structural type system
type VerifyUser = (user: User, sendValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUser = (user, sendValue) => {
    return (
        user.username === sendValue.username &&
        user.password === sendValue.password
    );
};

const dbUser = { username: 'Luis', password: '123456' };
const sedUser = { username: 'Luis', password: '123456' };
const loggingUser = verifyUser(dbUser, sedUser);

console.log(loggingUser);
