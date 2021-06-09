import React, {useState, useEffect, useContext} from "react";
import {UserHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import {useHistory} from "react-router-dom"


export const CreateSpellPage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request, loading} = UserHttp()


    const [form, setForm] = useState({
        nameSpell: "",
        level: "",
        casting_time: "",
        duration: "",
        range_area: "",
        attack_save: "",
        damage_effect: "",
        spell_class: ""
    })

    useEffect(() => {
        window.M.updateTextFields()
    },[])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const createHandler = async event => {
        try {

            const data = await request('/api/spell/generate', 'POST', {...form}, {  Autherization: `Bearer ${auth.token}`})
            history.push(`/detailPage/${data.spell._id}`)
        }catch (e) {}

    }

    return(
        <div className = "row">
            <div className= ".col.s6.offset-s3">
                <h1>Пограй в Dungeons and dragons</h1>
                <div className="card grey darken-3">
                    <div className="card-content red-text">
                        <span className="card-title">Create Spell</span>
                        <div>

                            <div className="input-field ">
                                <input
                                    placeholder="Enter Name spell"
                                    id="nameSpell"
                                    type="text"
                                    name= "nameSpell"
                                    className= "red-input"
                                    value={form.nameSpell}
                                    onChange= {changeHandler}
                                />
                                <label htmlFor="nameSpell">Name</label>
                            </div>

                            <div className="input-field ">
                                <input
                                    placeholder="Enter Level spell"
                                    id="level"
                                    type="text"
                                    name= "level"
                                    className= "red-input"
                                    value={form.level}
                                    onChange= {changeHandler}
                                />
                                <label htmlFor="level">Level</label>
                            </div>

                            <div className="input-field ">
                                <input
                                    placeholder="Enter Casting time"
                                    id="casting_time"
                                    type="text"
                                    name= "casting_time"
                                    className= "red-input"
                                    value={form.casting_time}
                                    onChange= {changeHandler}
                                />
                                <label htmlFor="casting_time">Casting time</label>
                            </div>

                            <div className="input-field ">
                                <input
                                    placeholder="Enter Duration"
                                    id="duration"
                                    type="text"
                                    name= "duration"
                                    className= "red-input"
                                    value={form.duration}
                                    onChange= {changeHandler}
                                />
                                <label htmlFor="duration">Duration</label>
                            </div>

                            <div className="input-field ">
                                <input
                                    placeholder="Enter Range/Area"
                                    id="range_area"
                                    type="text"
                                    name= "range_area"
                                    className= "red-input"
                                    value={form.range_area}
                                    onChange= {changeHandler}
                                />
                                <label htmlFor="range_area">Range/Area</label>
                            </div>

                            <div className="input-field ">
                                <input
                                    placeholder="Enter Attack/Save"
                                    id="attack_save"
                                    type="text"
                                    name= "attack_save"
                                    className= "red-input"
                                    value={form.attack_save}
                                    onChange= {changeHandler}
                                />
                                <label htmlFor="attack_save">Attack/Save</label>
                            </div>

                            <div className="input-field ">
                                <input
                                    placeholder="Enter Damage/Effect"
                                    id="damage_effect"
                                    type="text"
                                    name= "damage_effect"
                                    className= "red-input"
                                    value={form.damage_effect}
                                    onChange= {changeHandler}
                                />
                                <label htmlFor="damage_effect">Damage/Effect</label>
                            </div>

                            <div className="input-field ">
                                <input
                                    placeholder="Enter Spell class"
                                    id="spell_class"
                                    type="text"
                                    name= "spell_class"
                                    className= "red-input"
                                    value={form.spell_class}
                                    onChange= {changeHandler}
                                />
                                <label htmlFor="spell_class">Spell class</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className= "btn yellow darken-4"
                            style={{marginRight: 10}}
                            onClick={createHandler}
                            disabled={loading}
                        >
                            Create Spell
                        </button>

                    </div>
                </div>
            </div>
        </div>

    )
}