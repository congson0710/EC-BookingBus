import get from 'lodash/fp/get';

module.exports = app => {
  app.post('/api/register', (req, res) => {
    const registerData = req.body;
    console.log('regis data', registerData);
    res.send('kdjfnvjkdfnjkv');
  });
};
