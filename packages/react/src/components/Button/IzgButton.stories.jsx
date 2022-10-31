import React from 'react';

import { IzgButton } from './IzgButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/IzgButton',
  component: IzgButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IzgButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'IzgButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'IzgButton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'IzgButton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'IzgButton',
};
