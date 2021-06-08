import React, {useContext, useState} from 'react'
import styles from './CreateChar.module.css'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";

export const CreateCharPage = () => {
    const {request} = useHttp()
    const auth = useContext(AuthContext)
    const [char, setChar] = useState({
        name: '',
        ancestry: 'human',
        class: 'warrior',
        exp: 0,
        imageUrl: '',
        owner: null,
    })

    const createHandler = async event => {
        try {
            const data = await request('/api/characters/create', 'POST', {name: "hello"})
            console.log(data)
        } catch (e) {
            
        }
    }

    return (
        <div className={styles.container}>
                {/*<input*/}
                {/*    type="text"*/}
                {/*    name="nameInput"*/}
                {/*    id="nameInput"*/}
                {/*    placeholder="Enter character`s name"*/}
                {/*    value={char.name}*/}
                {/*    onChange={(event) => {*/}
                {/*        setChar(prevState => ({*/}
                {/*            char: {*/}
                {/*                ...prevState,*/}
                {/*                name: event.target.value*/}
                {/*            }*/}
                {/*        }))*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<select*/}
                {/*    name="ancestrySelect"*/}
                {/*    id="ancestrySelect"*/}
                {/*>*/}
                {/*    <option value="human">Human</option>*/}
                {/*    <option value="elf">Elf</option>*/}
                {/*    <option value="dwarf">Dwarf</option>*/}
                {/*    <option value="halforc">Half orc</option>*/}
                {/*    <option value="halfling">Halfling</option>*/}
                {/*</select>*/}
                {/*<select*/}
                {/*    name="classSelect"*/}
                {/*    id="classSelect"*/}
                {/*>*/}
                {/*    <option value="warrior">Warrior</option>*/}
                {/*    <option value="rogue">Rogue</option>*/}
                {/*    <option value="ranger">Ranger</option>*/}
                {/*    <option value="wizard">Wizard</option>*/}
                {/*    <option value="barbarian">Barbarian</option>*/}
                {/*</select>*/}
                {/*<input*/}
                {/*    type="url"*/}
                {/*    name="imageUrlInput"*/}
                {/*    id="imageUrlInput"*/}
                {/*    placeholder="Enter image URL"*/}
                {/*/>*/}
                <button onClick={createHandler}>Create</button>
        </div>
    )
}