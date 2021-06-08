const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
    name: {type: String, required: true},
    ancestry: {type: String, required: true},
    class: {type: String, required: true},
    exp: {type: Number, required: true},
    imageUrl: {type: String},
})

module.exports = model('Character', schema)