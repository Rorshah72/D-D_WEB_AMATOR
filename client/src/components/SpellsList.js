import React from "react"
import {Link} from "react-router-dom"

export const SpellsList = ({spells}) => {
    if (!spells.length) {
        return <p className = "center"> List Spells is empty</p>
    }
    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Name spell</th>
                <th>level</th>
                <th>Casting time</th>
                <th>Duration</th>
                <th>Range/Area</th>
                <th>Attack/Save</th>
                <th>Damage/Effect</th>
                <th>Spell class</th>
                <th>Open</th>
            </tr>
            </thead>

            <tbody>
            {spells.map((spell, index) => {
                return (
                    <tr key={spell._id}>
                        <td>{index + 1}</td>
                        <td>{spell.nameSpell}</td>
                        <td>{spell.level}</td>
                        <td>{spell.casting_time}</td>
                        <td>{spell.duration}</td>
                        <td>{spell.range_area}</td>
                        <td>{spell.attack_save}</td>
                        <td>{spell.damage_effect}</td>
                        <td>{spell.spell_class}</td>
                        <td>
                            <Link to = {`/detailPage/${spell._id}`}>Open</Link>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}