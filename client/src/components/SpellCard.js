import React from 'react'

export const SpellCard = ({spell}) => {
    return(
        <>
            <h2>Spell</h2>

            <p>Name: <a href={spell.nameSpell} target= "_blank" rel="noopener noreferrer" >{spell.nameSpell}</a></p>
            <p>Level: <a href={spell.level} target= "_blank" rel="noopener noreferrer" >{spell.level}</a></p>
            <p>Casting time: <a href={spell.Casting_time} target= "_blank" rel="noopener noreferrer" >{spell.Casting_time}</a></p>
            <p>Duration: <a href={spell.duration} target= "_blank" rel="noopener noreferrer" >{spell.duration}</a></p>
            <p>Range/Area: <a href={spell.range_area} target= "_blank" rel="noopener noreferrer" >{spell.range_area}</a></p>
            <p>Attack/Save: <a href={spell.attack_save} target= "_blank" rel="noopener noreferrer" >{spell.attack_save}</a></p>
            <p>Damage/Effect: <a href={spell.damage_effect} target= "_blank" rel="noopener noreferrer" >{spell.damage_effect}</a></p>
            <p>Spell class: <a href={spell.spell_class} target= "_blank" rel="noopener noreferrer" >{spell.spell_class}</a></p>

        </>
    )
}
