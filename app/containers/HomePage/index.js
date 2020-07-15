/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Mountain, Wave, ShipWrapper } from './homePage-styles';
import HomeBox from './HomeBox';

export default function HomePage() {
  return (
    <div>
      <HomeBox />
      <img style={Mountain} src={require('../../images/mountain.png')} />
      <img style={Wave} src={require('../../images/wave.gif')} />
        <img style={ShipWrapper} src={require('../../images/ship.png')} />
    </div>
  );
}
