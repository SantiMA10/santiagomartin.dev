// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react';

import { AboutMe } from '../components/AboutMe/AboutMe';

export default {
	title: 'Example/AboutMe',
	component: AboutMe,
} as Meta;

const Template: Story<{ live: boolean }> = (args) => <AboutMe {...args} />;

export const Live = Template.bind({});
Live.args = {
	live: true,
};

export const Offline = Template.bind({});
Offline.args = {
	live: false,
};
