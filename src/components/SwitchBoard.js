import React from 'react'
import {Route} from 'react-router-dom'

export default function SwitchBoard(props) {
    return (
        <div>
            <Route path='/' render={() => (<div>{props.trial}</div>)}/>
        </div>
    )
}
