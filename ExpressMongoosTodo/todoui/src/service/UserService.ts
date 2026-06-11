import type { User } from '../model/user';

const login = async (user: User): Promise<User> => {
    console.log("from login service", user);
    const response = await fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    return await response.json();
}
export default { login }