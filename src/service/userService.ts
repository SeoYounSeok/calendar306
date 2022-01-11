import API from '../utils/Api';

export const register = async (params: any) => {
  await API.post('/users/create', {
    name: params.name,
    password: params.password,
    address: params.address,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
