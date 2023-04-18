// const USERNAME = 'user399';
// const PASSWORD = 'cK7@nDh8';

const USERNAME = 'user2023';
const PASSWORD = 'analiadance.2023';

export function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === USERNAME && password === PASSWORD) {
        resolve();
      } else {
        alert('Usuario Incorrecto');
        reject();
      }
    }, 500);
  });
}
