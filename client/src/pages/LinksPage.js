import React, {useState, useContext, useCallback, useEffect} from "react";
import {UserHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import {Loader} from "../components/Loader"
import {LinksList} from "../components/LinksList"

export const LinksPage = () => {
    const [links, setLinks] = useState([])
    const {loading, request} = UserHttp()
    const {token} = useContext(AuthContext)

    const fetchLinks = useCallback( async () => {
        try {

            const fetched = await request(`/api/link`,'GET', null,
                {
                    Autherization: `Bearer ${token}`
                })


            setLinks(fetched)


        }catch (e) {}
    },[token, request] )

    useEffect(() => {
        fetchLinks()
    },[fetchLinks])


    if(loading) {
        return <Loader/>
    }
    return(
        <>
            {!loading && <LinksList links = { links }/>}
        </>
    )
}