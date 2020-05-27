import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import SwitchBoard from './SwitchBoard'
const meta = require('../../zestbox/main.json')

export default function Base() {
    return (
        <div>
            <Nav brand={meta['brand']} paths={meta['paths']}/>
            <main>
                <SwitchBoard paths={meta['paths']}/>
            </main>
            <Footer footer={meta['footer']}/>
        </div>
    )
}
