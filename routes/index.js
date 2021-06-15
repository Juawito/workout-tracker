const router = require('express').Router();
const api = require('./api/api.js')

router.get('/', (req, res) => res.sendFile('./public/index.html'));
router.get('/stats', (req, res) => res.sendFile('./public/stats.html'));
router.get('/exercise', (req, res) => res.sendFile('./public/exercise.html'));

router.use('/api', api);

module.exports = router;