const express = require('express');
const router = express.Router();
const {CreateService , FindByCategory , FindandUpdate , Delete} = require('../controllers/ServiceController')
const auth = require('../middlewares/auth')
router.post('/add/category/:categoryId/service', auth ,CreateService   );
router.get('/find/category/:categoryId/services', auth , FindByCategory )
router.put('/update/category/:categoryId/service/:serviceId', auth,FindandUpdate)
router.delete('/delete/category/:categoryId/service/:serviceId', auth,Delete)
module.exports = router