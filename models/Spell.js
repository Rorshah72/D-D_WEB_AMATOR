const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    nameSpell: {type: String, required: true},
    level: {type: String, required: true},
    casting_time: {type: String, required: true},
    duration: {type: String, required: true},
    range_area: {type: String, required: true},
    attack_save: {type: String, required: true},
    damage_effect: {type: String, required: true},
    spell_class: {type: String, required: true},
    owner: {type: Types.ObjectId, ref: 'User'}

})

module.exports = model('Spell', schema)