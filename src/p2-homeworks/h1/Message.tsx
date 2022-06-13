import React from 'react';
import m from './Message.module.css';


export type messageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}



function Message(props: messageDataPropsType) {

    return (
        <div className={m.message}>
            <img className={m.message__image} src={props.avatar} alt={''}/>
            <svg id='svgPath' height="10px" width="10px">
                <defs>
                    <clipPath id="svgPath">
                        <path fill="#FFFFFF" d="M10,10H0V0H0A10,10,0,0,0,10,10Z"/>
                    </clipPath>
                </defs>
            </svg>
            <div className={m.message__data}>
                <div className={m.message__dataText}>
                <div>{props.name}</div>
                <div>{props.message}</div>
            </div>
                <div className={m.message__dataTime}>
                <div>{props.time}</div>
            </div>
            </div>
        </div>
    )
}

export default Message
