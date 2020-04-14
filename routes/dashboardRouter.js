const express = require('express')
const router = express.Router()
const verify = require('../middlewares/verifyToken')

const con = require('../controller/dashboardController')

router.get('/transpermonth', con.getTransPerMonth)

router.use(verify)
router.get('/sepatu', con.countSepatu)
router.get('/user', con.countUser)
router.get('/trans', con.countTrans)
router.get('/retail', con.countRetail)

module.exports = router
