import React from 'react';
import { IzgText } from './IzgText';

export default {
  title: 'Example/IzgText',
  component: IzgText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


const Template = (args) => <IzgText {...args} />;

export const Label = Template.bind({});

Label.args = {
  variant: 'label',
  text: 'Amaterasu',
};

export const Paragraph = Template.bind({});

Paragraph.args = {
  variant: 'p',
  text: 'Amaterasu',
};

export const Strong = Template.bind({});

Strong.args = {
  variant: 'strong',
  text: 'Amaterasu',
};
