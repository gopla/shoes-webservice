const express = require('express')
const router = express.Router()
const verify = require('../middlewares/verifyToken')

const con = require('../controller/keranjangController')

router.use(verify)

router.get('/', con.index)
router.post('/', con.store)
router.put('/', con.update)
router.delete('/', con.delete)
router.delete('/:id_sepatu', con.delOneItem)

module.exports = router
