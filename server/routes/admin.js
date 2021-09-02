const router = require('express').Router()
const { isAuthenticated, isAdmin } = require('../middlewares/auth')
const { create, findAll, findOne, update, remove } = require('../controllers/admin')

router.post('/', isAuthenticated, create)
router.get('/', isAuthenticated, findAll)
router.get('/:userId', isAuthenticated, isAdmin, findOne)
router.put('/:userId', isAuthenticated, isAdmin, update)
router.delete('/:userId', isAuthenticated, isAdmin, remove)

module.exports = router