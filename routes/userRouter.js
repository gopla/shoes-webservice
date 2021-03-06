const express = require('express')
const router = express.Router()
const multer = require('multer')
const verify = require('../middlewares/verifyToken')

let upload = multer()
const con = require('../controller/userController')

router.get('/', con.index)
router.get('/:id', con.show)
router.post('/', upload.single('foto'), con.store)
router.put('/:id', upload.single('foto'), con.update)
router.delete('/:id', con.delete)

router.post('/login', con.authenticate)

router.use(verify)

router.get('/profile/me', con.me)

module.exports = router
