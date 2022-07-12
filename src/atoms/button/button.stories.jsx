import React from 'react';
// import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
  title: 'Button',
  component: Button,
};

export const basicButton = () => <Button variant="secondary">Basic Button</Button>;

export const functionButton = () => <Button onClick={() => alert('hello')}>Function Button</Button>;

export const linkedButton = () => <Button href="/route">Linked Button</Button>;
