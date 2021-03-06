const {Router} = require('express')
const Link = require('../models/Link')
const config = require('config')
const shortId = require('shortid')
const router = Router()
const auth = require('../middleware/auth.middleware')

router.post('/generate', auth, async  (req, res) => {
    try{


        const baseUrl = config.get('baseUrl')
        const {from} = req.body

        const code = shortId.generate()

        const existing = await Link.findOne({from})

        if(existing){
            return res.json({link: existing})
        }

        const to = baseUrl + '/t/' + code

        const link = new Link({
            code, to, from, owner: req.user.userID
        })

        await link.save()

        res.status(201).json({link})





    }catch (e) {
        res.status(500).json({ message: 'Сталась помилка, попробуйте щераз'})
    }
})

router.get('/', auth, async (req, res) => {
    try{


        const links = await  Link.find({ owner: req.user.userID })
        res.json(links)

    }catch (e) {
        res.status(500).json({ message: 'Сталась помилка, попробуйте щераз'})
    }
})

router.get('/:id',auth, async  (req, res) => {
    try{
        const links = await  Link.findById(req.params.id)  // ?
        res.json(links)
    }catch (e) {
        res.status(500).json({ message: 'Сталась помилка, попробуйте щераз'})
    }
})

module.exports = router