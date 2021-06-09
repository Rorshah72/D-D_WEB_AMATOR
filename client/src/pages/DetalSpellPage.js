import React, {useState, useCallback, useContext, useEffect} from "react";
import {useParams} from 'react-router-dom'
import {UserHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from "../components/Loader"
import {SpellCard} from  "../components/SpellCard"

export const DetailSpellPage = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = UserHttp()
    const [spell, setSpell] = useState({
        nameSpell: "",
        level: "",
        casting_time: "",
        duration: "",
        range_area: "",
        attack_save: "",
        damage_effect: "",
        spell_class: ""
    })
    const spellId = useParams().id




    const getSpell = useCallback(async () => {
        try {

            const fetched = await request(`/api/spell/${spellId}`,'GET', null,
                {
                    Autherization: `Bearer ${token}`
                })

            setSpell(fetched)

        }catch (e) {}
    },[token, spellId, request])

    useEffect(() => {
        getSpell()
    }, [getSpell])

    if(loading){
        return <Loader/>
    }

    return(
        <>
            { !loading && spell && <SpellCard spell = {spell}/>}
        </>
    )
}