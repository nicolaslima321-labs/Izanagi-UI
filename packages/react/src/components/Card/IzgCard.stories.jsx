import React from 'react';
import { IzgCard } from './IzgCard';

export default {
  title: 'Example/IzgCard',
  component: IzgCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <IzgCard {...args} />;

export const Base = Template.bind({});
Base.args = {
  slot: <span>foo bar</span>,
};

export const Clickable = Template.bind({});
Clickable.args = {
  slot: <span>foo bar</span>,
  onClick: () => console.log('foo bar'),
};

export const Hoverless = Template.bind({});
Hoverless.args = {
  slot: <span>foo bar</span>,
  hoverless: true,
};

export const Borderless = Template.bind({});
Borderless.args = {
  slot: <span>foo bar</span>,
  borderless: true,
};
