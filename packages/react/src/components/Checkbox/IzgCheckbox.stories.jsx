import React from 'react';
import { IzgCheckbox } from './IzgCheckbox';

export default {
  title: 'Example/IzgCheckbox',
  component: IzgCheckbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


const Template = (args) => <IzgCheckbox {...args} />;

export const Raw = Template.bind({});

Raw.args = {
  id: 'best_language',
  name: 'JavaScript',
  value: 'JS is better than Ruby',
};

export const Text = Template.bind({});

Text.args = {
  text: 'All > Ruby',
  id: 'best_language',
  name: 'everything',
  value: 'Everything is better than Ruby',
};
