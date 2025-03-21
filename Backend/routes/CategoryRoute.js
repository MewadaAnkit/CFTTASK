const express = require('express');
const router = express.Router();
const {CreateCategory , FindallCategory , FindandUpdate , Delete} = require('../controllers/CategoryController')
const auth = require('../middlewares/auth')
router.post('/add/category', auth ,CreateCategory   );
router.get('/find/categories', auth , FindallCategory )
router.put('/update/category/:categoryId', auth,FindandUpdate)
router.delete('/delete/category/:categoryId', auth,Delete)
module.exports = router