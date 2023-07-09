import {uploadPhoto, createUser} from './utils';
function handleProfileSignup() {
  promise.all([uploadPhoto(), createUser()])
  .then(([photoResponse, userResponse]) => {
    console.log('body ${userResponse.firstName} ${userResponse.lastName}')
  })
  .catch((error) => {
    console.error('Signup system offline');
  });
}
