import API from '../utils/Api';

type userProps = {
  userId?: string;
  name?: string;
  password?: string;
  address?: string;
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

export const userInfoService = async (userId: string) => {
  await API.post(`/user/find/${userId}`)
    .then(function (response) {
      console.log('userInfoService ,  print response code console log');
      console.log(response);
    })
    .catch(function (error) {
      console.log('print error code console log');
      console.log(error);
    });
};

export const updateUserService = async ({...props}: userProps) => {
  await API.patch('/user/update', {
    userId: props.userId,
    name: props.name,
    password: props.password,
    address: props.address,
  })
    .then(function (response) {
      console.log('updateUserService ,  print response code console log');
      console.log(response);
    })
    .catch(function (error) {
      console.log('print error code console log');
      console.log(error);
    });
};
