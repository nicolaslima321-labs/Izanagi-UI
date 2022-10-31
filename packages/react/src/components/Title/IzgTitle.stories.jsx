import React from 'react';
import { IzgTitle } from './IzgTitle';

export default {
  title: 'Example/IzgTitle',
  component: IzgTitle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


const Template = (args) => <IzgTitle {...args} />;

export const H1 = Template.bind({});

H1.args = {
  variant: 'h1',
  text: 'Sekai ni itamio',
};

export const H2 = Template.bind({});

H2.args = {
  variant: 'h2',
  text: 'Sekai ni itamio',
};

export const H3 = Template.bind({});

H3.args = {
  variant: 'h3',
  text: 'Sekai ni itamio',
};

export const H4 = Template.bind({});

H4.args = {
  variant: 'h4',
  text: 'Sekai ni itamio',
};

export const H5 = Template.bind({});

H5.args = {
  variant: 'h5',
  text: 'Sekai ni itamio',
};

export const H6 = Template.bind({});

H6.args = {
  variant: 'h6',
  text: 'Sekai ni itamio',
};
