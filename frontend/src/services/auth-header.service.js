export const authHeader = () => {
  let token = localStorage.getItem('jwt');

  if (token) {
    return { 'x-access-token': token };
  } else {
    return console.log('no te has logueado');
  }
};
