import React from 'react'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from "./h5.module.css"

function Header() {
    return (
        <div className={s.container}>
            <div className={s.slide}>
                <NavLink to={PATH.PRE_JUNIOR}>  PreJunior </NavLink>
            </div>
            <div className={s.slide}>
                <NavLink to={PATH.JUNIOR}>  Junior </NavLink>
            </div>
            <div className={s.slide}>
                <NavLink to={PATH.JUNIORPlus}>  JuniorPlus </NavLink>
            </div>

        </div>
    )
}

export default Header
