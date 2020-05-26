import React from 'react'
import Nav from '../nav/Nav'
import SwitchBoard from './SwitchBoard'
const meta = require('../content/main.json')

export default function Base() {
    return (
        <div className="base-frame">
            <Nav brand={meta['brand']} paths={meta['paths']}/>
            <main>
                <SwitchBoard trial={meta['trial']}/>
            </main>
        </div>
    )
}
