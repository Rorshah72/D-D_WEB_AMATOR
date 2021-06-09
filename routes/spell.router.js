const {Router} = require('express')
const Spell = require('../models/Spell')
const config = require('config')
const router = Router()
const auth = require('../middleware/auth.middleware')

router.post('/generate', auth, async  (req, res) => {
    try{

        const {nameSpell, level, casting_time, duration, range_area, attack_save, damage_effect, spell_class} = req.body

        const existing = await Spell.findOne({nameSpell})

        if(existing){
            return res.status(400).json({message:'This spell is existing!'})
        }

        const spell = new Spell({
            nameSpell, level, casting_time, duration, range_area, attack_save, damage_effect, spell_class, owner: req.user.userID
        })

        await spell.save()

        res.status(201).json({spell})

    }catch (e) {
        res.status(500).json({ message: 'Сталась помилка, попробуйте щераз'})
    }
})

router.get('/', auth, async (req, res) => {
    try{
        const spells = await  Spell.find({ owner: req.user.userID })
        res.json(spells)

    }catch (e) {
        res.status(500).json({ message: 'Сталась помилка, попробуйте щераз'})
    }
})

router.get('/:id',auth, async  (req, res) => {
    try{
        const spells = await  Spell.findById(req.params.id)  // ?
        res.json(spells)
    }catch (e) {
        res.status(500).json({ message: 'Сталась помилка, попробуйте щераз'})
    }
})

module.exports = router