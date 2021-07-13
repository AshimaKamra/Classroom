const path = require('path');

const express = require('express');

const labsController = require('../controllers/labs');

const router = express.Router();

router.get('/', labsController.getLabs);

router.get('/labs', labsController.getLabs);

// router.get('/', labsController.getIndex);
router.post('/add-lab', labsController.postAddLab);
router.get('/add-lab', labsController.getAddLab);


// router.get('/labs/:labId', labsController.getLab);


module.exports = router;
