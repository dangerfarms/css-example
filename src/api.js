export function login() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({token: 'mockToken'}), 2000);
    });
}
