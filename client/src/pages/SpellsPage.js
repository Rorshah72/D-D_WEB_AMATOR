import React, {useState, useContext, useCallback, useEffect} from "react";
import {UserHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import {Loader} from "../components/Loader"
import {SpellsList} from "../components/SpellsList"

export const SpellsPage = () => {
    const {loading, request} = UserHttp()
    const {token} = useContext(AuthContext)
    const [spells, setSpells] = useState({
        nameSpell: "",
        level: "",
        casting_time: "",
        duration: "",
        range_area: "",
        attack_save: "",
        damage_effect: "",
        spell_class: ""
    })

    const fetchSpells = useCallback( async () => {
        try {
            const fetched = await request(`/api/spell`,'GET', null,
                {
                    Autherization: `Bearer ${token}`
                })

            setSpells(fetched)


        }catch (e) {}
    },[token, request,] )

    useEffect(() => {
        fetchSpells()
    },[fetchSpells])


    if(loading) {
        return <Loader/>
    }
    return(
        <>
            {!loading && <SpellsList spells = { spells }/>}
        </>
    )
}