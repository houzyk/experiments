import { createComponent } from './Component';

export default {
  title: 'Example/Component',
  tags: ['autodocs'],
  render: () => {
    return createComponent();
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Component = {
  args: {}
};
