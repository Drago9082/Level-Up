const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route! This is sent by the server1'));

module.exports = router;