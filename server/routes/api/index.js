const router = require('express').Router();
const userRoutes = require('./userRoute');
const gameRoute = require('./gameRoute');

router.use('/user', userRoutes);
router.use('/game', gameRoute);

module.exports = router;
