const Router = require('express');
const router = new Router();
const recordContrloller = require('../controllers/record');

router.post('/', recordContrloller.addRecord);
router.get('/', recordContrloller.getRecords);
router.get('/:id', recordContrloller.getRecord);
router.put('/', recordContrloller.updateRecord);
router.delete('/:id', recordContrloller.deleteRecord);

module.exports = router;
