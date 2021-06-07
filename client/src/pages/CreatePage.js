import React, {useState, useEffect, useContext} from "react";
import {UserHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import {useHistory} from "react-router-dom"


export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = UserHttp()
    const [link, setLink] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    },[])

    const pressHandler = async event => {
        if(event.key === 'Enter'){
            try {

             const data = await request('/api/link/generate', 'POST', {from: link}, {  Autherization: `Bearer ${auth.token}`})
             history.push(`/detail/${data.link._id}`)
            }catch (e) {}
        }
    }

    return(
        <div className= "row">
                <div className= ".col.s8.offset-s2"style={{paddingTop: '2rem'}}>
                    <div className="input-field ">
                        <input
                            placeholder="Вставте силку"
                            id="link"
                            type="text"
                            value={link}
                            onChange= {e => {setLink(e.target.value)}}
                            onKeyPress={pressHandler}
                        />
                        <label htmlFor="link">Введіть силку</label>
                    </div>
                </div>
        </div>
    )
}