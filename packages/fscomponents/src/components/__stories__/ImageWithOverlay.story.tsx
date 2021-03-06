/* tslint:disable:jsx-use-translation-function */
// We don't need to worry about translating the element
// strings in this file since this is mainly a demo

import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react'; // tslint:disable-line:no-implicit-dependencies
import {
  select
// tslint:disable-next-line no-submodule-imports no-implicit-dependencies
} from '@storybook/addon-knobs/react';
import { ImageWithOverlay } from '../ImageWithOverlay';

const homeBanner = require('./assets/images/center.png');

const defaultImageStyle = {
  width: 375,
  height: 200
};

const positions = [
  'bottomLeft',
  'bottomCenter',
  'bottomRight',
  'centerLeft',
  'center',
  'centerRight',
  'topLeft',
  'topCenter',
  'topRight'
];

const overlay = <Text>Overlay</Text>;

storiesOf('ImageWithOverlay', module)
  .add('basic usage', () => (
    <ImageWithOverlay
      imageProps={{
        source: homeBanner,
        style: defaultImageStyle
      }}
      overlay={overlay}
      overlayPosition={select('overlayPosition', positions, 'topRight') as any}
    />
  ));
