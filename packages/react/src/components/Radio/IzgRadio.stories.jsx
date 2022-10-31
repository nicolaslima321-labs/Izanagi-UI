import React from 'react';
import { IzgRadio } from './IzgRadio';

export default {
  title: 'Example/IzgRadio',
  component: IzgRadio,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


const Template = (args) => <IzgRadio {...args} />;

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
