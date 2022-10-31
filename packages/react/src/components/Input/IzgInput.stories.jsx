import React from 'react';
import { IzgInput } from './IzgInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/IzgInput',
  component: IzgInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IzgInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  placeholder: 'IzgInput',
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: 'IzgInput',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  placeholder: 'IzgInput',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'IzgInput',
};
