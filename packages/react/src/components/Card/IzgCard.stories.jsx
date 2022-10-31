import React from 'react';

import { IzgCard } from './IzgCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/IzgCard',
  component: IzgCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IzgCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  slot: <span>foo bar</span>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  slot: <span>foo bar</span>,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  slot: <span>foo bar</span>,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  slot: <span>foo bar</span>,
};
