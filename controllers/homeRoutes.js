const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({ message: 'Home Page' });
});

module.exports = router;
