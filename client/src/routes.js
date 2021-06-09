import React from "react";
import {Switch, Route, Redirect} from  'react-router-dom'
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {DetailSpellPage} from "./pages/DetalSpellPage";
import {CreateSpellPage} from "./pages/CreateSpellPage";
import {SpellsPage} from "./pages/SpellsPage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return (
            <Switch>
                <Route path = "/links" exact>
                    <LinksPage />
                </Route>
                <Route path = "/createSpell" exact>
                    <CreateSpellPage />
                </Route>
                <Route path = "/spells" exact>
                    <SpellsPage />
                </Route>
                <Route path = "/detailPage/:id" exact>
                    <DetailSpellPage />
                </Route>
                <Route path = "/create" exact>
                    <CreatePage />
                </Route>
                <Route path = "/detail/:id" >
                    <DetailPage />
                </Route>
                <Redirect to = "/create" />
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