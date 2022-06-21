import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'white'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.value)
    const dispatch = useDispatch()
    const onChangeCallback = (value: string) => {
        dispatch(changeThemeC(value))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homework 12
            </span>
            <SuperRadio name={'themes'}
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeCallback}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
