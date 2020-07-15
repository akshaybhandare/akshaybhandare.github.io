import styled, { createGlobalStyle } from 'styled-components';
import { transform } from 'lodash';

export const Mountain = {
position:"absolute",
width:"670px",
bottom:"10px",
right:"0%",
zIndex:"+21"
}

export const Wave = {
    position:"absolute",
    width:"100%",
    height:"30%",
    bottom:"0%",
    zIndex:"+21"
}



export const ShipWrapper = {
position:"absolute",
zIndex:"+21",
height:"250px",
width:"250px",
bottom:"20px",
animation: `${ShipWrapper} 20s infinite linear`,
}


