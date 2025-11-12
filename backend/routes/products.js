const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', controller.list);
router.get('/:id', controller.get);
// admin routes
router.post('/', protect, admin, controller.create);
router.put('/:id', protect, admin, controller.update);
router.delete('/:id', protect, admin, controller.remove);

module.exports = router;
