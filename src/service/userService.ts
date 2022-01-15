import API from '../utils/Api';

type userProps = {
  name: string;
  password?: string;
  address: string;
};

export const registerService = async ({...props}: userProps) => {
  await API.post('/users/create', {
    params: {
      name: props.name,
      password: props.password,
      address: props.address,
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
