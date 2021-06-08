import React from "react";
import {Switch, Route, Redirect} from  'react-router-dom'
import {AuthPage} from "./pages/AuthPage";
import {CreateCharPage} from "./pages/CreateCharPage";
import {CharactersPage} from "./pages/CharactersPage";
import {DetailPage} from "./pages/DetailPage";

export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return (
            <Switch>
                <Route path="/characters">
                    <CharactersPage/>
                </Route>
                <Route path="/create">
                    <CreateCharPage/>
                </Route>
                <Route path="/details/:id">
                    <DetailPage/>
                </Route>

            </Switch>
        )
    }

    return (
        <Switch>
            <Route path = "/" exact>
                <AuthPage/>
            </Route>
            <Redirect to = "/" />
        </Switch>
    )
}