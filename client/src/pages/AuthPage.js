import React, {useState, useEffect, useContext} from "react";
import {UserHttp} from "../hooks/http.hook";
import {UseMessage} from "../hooks/message.hook"
import {AuthContext} from "../context/AuthContext"

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = UseMessage()
    const {loading, request, error, clearError} = UserHttp()
    const [form, setForm] = useState({
       email: "", password: ""
    })

    useEffect( () => {
        message(error)
        clearError()

    }, [error, message,clearError])

    useEffect(() => {
        window.M.updateTextFields()
    },[])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
            console.log('Data', data)
        }catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        }catch (e) {}
    }



    return(
        <div className = "row">
           <div className= ".col.s6.offset-s3">
               <h1>Пограй в Dungeons and dragons</h1>
               <div className="card grey darken-3">
                   <div className="card-content red-text">
                       <span className="card-title">Авторизація</span>
                       <div>

                           <div className="input-field ">
                               <input
                                   placeholder="Введіть email"
                                   id="email"
                                   type="text"
                                   name= "email"
                                   className= "red-input"
                                   value={form.email}
                                   onChange= {changeHandler}
                               />
                                   <label htmlFor="email">Email</label>
                           </div>

                           <div className="input-field ">
                               <input
                                   placeholder="Введіть пароль"
                                   id="password"
                                   type="password"
                                   name= "password"
                                   className= "red-input"
                                   value={form.password}
                                   onChange= {changeHandler}
                               />
                               <label htmlFor="password">Пароль</label>
                           </div>

                       </div>
                   </div>
                   <div className="card-action">
                       <button
                           className= "btn yellow darken-4"
                           style={{marginRight: 10}}
                           onClick={loginHandler}
                           disabled={loading}
                       >
                           Авторизоватися
                       </button>
                       <button
                           className= "btn green lighten-1 black-text"
                           onClick={registerHandler}
                           disabled={loading}
                       >
                           Заєструватися
                       </button>
                   </div>
               </div>
           </div>
        </div>
    )
}