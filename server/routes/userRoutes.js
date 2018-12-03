import get from 'lodash/fp/get';

module.exports = app => {
  app.post('/api/register', (req, res) => {
    const registerData = get('body')(req);
    console.log('regis data', registerData);
    res.status(200).send('success');
  });
  app.post('/api/login', (req, res) => {
    const loginData = get('body')(req);
    console.log('login data', loginData);
    res.status(200).send('success');
  });
};
