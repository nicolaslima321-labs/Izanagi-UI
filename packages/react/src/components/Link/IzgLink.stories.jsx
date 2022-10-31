import React from 'react';
import { IzgLink } from './IzgLink';

export default {
  title: 'Example/IzgLink',
  component: IzgLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


const Template = (args) => <IzgLink {...args} />;

export const Link = Template.bind({});

Link.args = {
  href: 'https://github.com/nicolaslima321',
  target: '_blank',
  text: `Check out my creator's profile!`,
};
