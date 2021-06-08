const {Router} = require('express')
const Character = require('../models/Character')
const router = Router()
const auth = require('../middleware/auth.middleware')
const config = require('config')
const shortid = require('shortid')

router.post('/create', async (req, res) => {
    try{
        console.log(req.body)
    } catch (e) {
        res.status(500).json({message: 'Somthing goes wrong, wooops. 1 '})
    }
})

router.get('/', auth, async (req, res) => {
    try{
        const characters = await Character.find({owner: req.user.userId})
        res.json(characters)
    } catch (e) {
        res.status(500).json({message: 'Somthing goes wrong, wooops. 2'})
    }
})

router.get('/:id', async (req, res) => {
    try{

    } catch (e) {
        res.status(500).json({message: 'Somthing goes wrong, wooops.'})
    }
})

module.exports = router