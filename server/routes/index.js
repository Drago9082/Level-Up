const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
  })

router.use((req, res) => res.send('Wrong route! This is sent by the server'));

module.exports = router;