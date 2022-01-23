import API from '../utils/Api';

type userProps = {
  userId: string;
  name: string;
  password: string;
  address: string;
};

export const registerService = async ({...props}: userProps) => {
  await API.post('/user/create', {
    userId: props.userId,
    name: props.name,
    password: props.password,
    address: props.address,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
