import React from 'react';
import {Box,Box_img} from './boxstyle'

export default function HomeBox() {
    return (
        <div style={Box}>
            <img style={Box_img} src={require('../../../images/title.png')} />
        </div>
    )
}
