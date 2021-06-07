const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check,validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

router.post(
    '/register',
    [
        check('email', 'Неправильна email').isEmail(),
        check('password', 'Мінімальна довжина пароля становить 6 символів').isLength( {min:6 })
    ],
    async (req, res) =>{
    try{

        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Неправильні дані при реєстрації'
            })
        }

        const  {email, password} = req.body

        const  candidate = await User.findOne({email})

        if(candidate) {
            return res.status(400).json({message:'Користувач з такою поштою вже існує!'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: 'Користувач створений'})

    }catch (e) {
        res.status(500).json({ message: 'Сталась помилка, попробуйте щераз'})
    }
})

router.post(
    '/login',
    [
      check('email','Введіть свій email').normalizeEmail().isEmail(),
      check('password', 'Введіть пароль').exists()
    ],
    async (req, res) =>{
    try{
        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Неправильні дані при вході у систему'
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({ email })

        if(!user){
            return res.status(400).json({message: 'User not found'})

        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({message: 'Password incorrectly, try again'})
        }

        const token = jwt.sign(
            { userID: user.id },
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userID: user.id })


    }catch (e) {
        res.status(500).json({ message: 'Сталась помилка, попробуйте щераз'})
    }

})

module.exports = router