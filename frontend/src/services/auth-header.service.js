export const authHeader = () => {
  let token = localStorage.getItem('jwt');
  token ? { 'x-access-token': token } : console.log('No te has logueado');
};
