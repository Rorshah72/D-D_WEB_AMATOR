const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    characters: {type: Types.ObjectId, ref: 'Character'}
})

module.exports = model('User', schema)