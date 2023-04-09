// const USERNAME = 'user399';
// const PASSWORD = 'cK7@nDh8';

const USERNAME = '123';
const PASSWORD = '123';

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
